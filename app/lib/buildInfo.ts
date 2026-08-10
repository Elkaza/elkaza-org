export function getBuildCommit() {
  return (
    process.env.VERCEL_GIT_COMMIT_SHA ||
    process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA ||
    process.env.COMMIT_SHA ||
    process.env.GIT_COMMIT_SHA ||
    "development"
  );
}
