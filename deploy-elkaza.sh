#!/usr/bin/env bash
set -Eeuo pipefail

PROJECT_DIR="${PROJECT_DIR:-$HOME/elkaza-web}"
REMOTE_TARGET="${REMOTE_TARGET:-mohamed@100.69.253.5:./}"
SITE_URL="${SITE_URL:-https://elkaza.at}"
BACKEND_URL="${BACKEND_URL:-http://100.69.253.5:8081}"
CURL_MAX_TIME="${CURL_MAX_TIME:-20}"
DEPLOY_LOCK_FILE="${DEPLOY_LOCK_FILE:-$HOME/.cache/elkaza-web/deploy.lock}"
DEPLOY_BACKUP_DIR=""
DEPLOYMENT_STARTED=0

mkdir -p "$(dirname "$DEPLOY_LOCK_FILE")"
exec 9>"$DEPLOY_LOCK_FILE"
if ! flock -n 9; then
  echo "ERROR: another elkaza.at deployment is already running" >&2
  exit 1
fi

curl_head() {
  curl --fail --silent --show-error --max-time "$CURL_MAX_TIME" --head "$@"
}

assert_status() {
  local expected="$1"
  shift
  local actual
  actual="$(curl --silent --show-error --max-time "$CURL_MAX_TIME" --output /dev/null --write-out '%{http_code}' "$@")"
  if [[ "$actual" != "$expected" ]]; then
    echo "Unexpected HTTP status $actual (expected $expected): $*" >&2
    exit 1
  fi
}

read_version_sha() {
  curl --fail --silent --show-error --max-time "$CURL_MAX_TIME" "$1/version.json" |
    node -e 'let input=""; process.stdin.on("data", chunk => input += chunk); process.stdin.on("end", () => { const value=JSON.parse(input).gitSha; if (!/^[0-9a-f]{40}$/.test(value)) process.exit(1); process.stdout.write(value); });'
}

assert_canonical_host() {
  local www_location
  www_location="$(curl --silent --show-error --max-time "$CURL_MAX_TIME" --head --resolve www.elkaza.at:443:127.0.0.1 https://www.elkaza.at/ | awk 'tolower($1)=="location:" {print $2}' | tr -d '\r')"
  if [[ "$www_location" != "$SITE_URL/" ]]; then
    echo "Unexpected www redirect target: ${www_location:-none}" >&2
    return 1
  fi
}

cleanup_backup() {
  if [[ -n "$DEPLOY_BACKUP_DIR" && "$DEPLOY_BACKUP_DIR" == "${TMPDIR:-/tmp}/"* ]]; then
    rm -rf -- "$DEPLOY_BACKUP_DIR"
  fi
}

rollback() {
  local exit_code=$?
  trap - ERR
  if [[ "$DEPLOYMENT_STARTED" == 1 && -n "$DEPLOY_BACKUP_DIR" ]]; then
    echo "ERROR: deployment verification failed; restoring previous static export" >&2
    rsync -az --delete -e "ssh -o BatchMode=yes" "$DEPLOY_BACKUP_DIR/" "$REMOTE_TARGET" ||
      echo "CRITICAL: automatic rollback failed; restore $REMOTE_TARGET manually" >&2
  fi
  cleanup_backup
  exit "$exit_code"
}

trap rollback ERR
trap cleanup_backup EXIT

cd "$PROJECT_DIR"

echo "==> Updating source"
git pull --ff-only origin main

if [[ -n "$(git status --porcelain --untracked-files=normal)" ]]; then
  echo "ERROR: refusing to deploy a dirty working tree" >&2
  exit 1
fi

if [[ "$(git branch --show-current)" != "main" ]]; then
  echo "ERROR: refusing to deploy from a branch other than main" >&2
  exit 1
fi

EXPECTED_GIT_SHA="$(git rev-parse HEAD)"
if [[ "$EXPECTED_GIT_SHA" != "$(git rev-parse origin/main)" ]]; then
  echo "ERROR: refusing to deploy a commit that is not origin/main" >&2
  exit 1
fi
if [[ -n "${BUILD_GIT_SHA:-}" && "$BUILD_GIT_SHA" != "$EXPECTED_GIT_SHA" ]]; then
  echo "ERROR: BUILD_GIT_SHA does not match the clean checked-out release" >&2
  exit 1
fi

echo "==> Cleaning generated Next artifacts"
rm -rf "$PROJECT_DIR/.next"

echo "==> Installing dependencies"
export HUSKY=0
if [[ -f package-lock.json ]]; then
  npm ci
else
  npm install
fi

echo "==> Running checks"
npm run lint
npm run typecheck

echo "==> Building static export"
BUILD_GIT_SHA="$EXPECTED_GIT_SHA" npm run build

echo "==> Preflighting current backend and ingress before upload"
curl_head "$BACKEND_URL/" >/dev/null
curl_head "$BACKEND_URL/kontakt/" >/dev/null
curl_head --resolve elkaza.at:443:127.0.0.1 "$SITE_URL/" >/dev/null
curl_head --resolve elkaza.at:443:127.0.0.1 "$SITE_URL/kontakt/" >/dev/null
assert_status 404 "$BACKEND_URL/__elkaza_missing_route__/"
assert_status 404 --resolve elkaza.at:443:127.0.0.1 "$SITE_URL/__elkaza_missing_route__/"
assert_canonical_host

echo "==> Backing up current static export"
DEPLOY_BACKUP_DIR="$(mktemp -d "${TMPDIR:-/tmp}/elkaza-deploy-backup.XXXXXX")"
rsync -az --delete -e "ssh -o BatchMode=yes" "$REMOTE_TARGET" "$DEPLOY_BACKUP_DIR/"

echo "==> Previewing deployment changes"
rsync -az --delete --dry-run --itemize-changes -e "ssh -o BatchMode=yes" "$PROJECT_DIR/out/" "$REMOTE_TARGET"

echo "==> Deploying static export to debian-core"
DEPLOYMENT_STARTED=1
rsync -az --delete -e "ssh -o BatchMode=yes" "$PROJECT_DIR/out/" "$REMOTE_TARGET"

echo "==> Smoke testing backend and ingress"
curl_head "$BACKEND_URL/" >/dev/null
curl_head "$BACKEND_URL/kontakt/" >/dev/null
curl_head --resolve elkaza.at:443:127.0.0.1 "$SITE_URL/" >/dev/null
curl_head --resolve elkaza.at:443:127.0.0.1 "$SITE_URL/kontakt/" >/dev/null
assert_status 404 "$BACKEND_URL/__elkaza_missing_route__/"
assert_status 404 --resolve elkaza.at:443:127.0.0.1 "$SITE_URL/__elkaza_missing_route__/"
assert_canonical_host

backend_sha="$(read_version_sha "$BACKEND_URL")"
public_sha="$(read_version_sha "$SITE_URL")"
if [[ "$backend_sha" != "$EXPECTED_GIT_SHA" || "$public_sha" != "$EXPECTED_GIT_SHA" ]]; then
  echo "Unexpected deployed version: backend=$backend_sha public=$public_sha expected=$EXPECTED_GIT_SHA" >&2
  exit 1
fi

DEPLOYMENT_STARTED=0

echo "Deployment complete: $SITE_URL ($EXPECTED_GIT_SHA)"
