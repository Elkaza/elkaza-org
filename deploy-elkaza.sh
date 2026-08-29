#!/usr/bin/env bash
set -Eeuo pipefail

PROJECT_DIR="${PROJECT_DIR:-$HOME/elkaza-web}"
REMOTE_TARGET="${REMOTE_TARGET:-mohamed@100.69.253.5:./}"
SITE_URL="${SITE_URL:-https://elkaza.at}"
BACKEND_URL="${BACKEND_URL:-http://100.69.253.5:8081}"
CURL_MAX_TIME="${CURL_MAX_TIME:-20}"
DEPLOY_LOCK_FILE="${DEPLOY_LOCK_FILE:-$HOME/.cache/elkaza-web/deploy.lock}"

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

cd "$PROJECT_DIR"

echo "==> Updating source"
git pull --ff-only origin main

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
npm run build

echo "==> Deploying static export to debian-core"
rsync -az --delete -e "ssh -o BatchMode=yes" "$PROJECT_DIR/out/" "$REMOTE_TARGET"

echo "==> Smoke testing backend and ingress"
curl_head "$BACKEND_URL/" >/dev/null
curl_head "$BACKEND_URL/kontakt/" >/dev/null
curl_head --resolve elkaza.at:443:127.0.0.1 "$SITE_URL/" >/dev/null
curl_head --resolve elkaza.at:443:127.0.0.1 "$SITE_URL/kontakt/" >/dev/null
assert_status 404 "$BACKEND_URL/__elkaza_missing_route__/"
assert_status 404 --resolve elkaza.at:443:127.0.0.1 "$SITE_URL/__elkaza_missing_route__/"

www_location="$(curl --silent --show-error --max-time "$CURL_MAX_TIME" --head --resolve www.elkaza.at:443:127.0.0.1 https://www.elkaza.at/ | awk 'tolower($1)=="location:" {print $2}' | tr -d '\r')"
if [[ "$www_location" != "$SITE_URL/" ]]; then
  echo "Unexpected www redirect target: ${www_location:-none}" >&2
  exit 1
fi

echo "Deployment complete: $SITE_URL"
