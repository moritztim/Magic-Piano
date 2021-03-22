#!/bin/bash

set -euo pipefail;

MAIN_BRANCH=main;
DEPLOY_BRANCH=gh-pages;
BUILD_FOLDER=build;

COMMIT_MESSAGE="Deploy from $(git log -n 1 --format="%h" HEAD) at $(date +"%Y-%m-%d %H:%M:%S %Z")";

yarn build;

# Ensure $DEPLOY_BRANCH is up-to-date with remote
git fetch --force origin "$DEPLOY_BRANCH":"$DEPLOY_BRANCH";

git symbolic-ref HEAD refs/heads/"$DEPLOY_BRANCH";

git --work-tree "$BUILD_FOLDER" reset --mixed --quiet;
git --work-tree "$BUILD_FOLDER" add --all;

git --work-tree "$BUILD_FOLDER" commit -m "$COMMIT_MESSAGE";

git push origin "$DEPLOY_BRANCH";

git checkout --force "$MAIN_BRANCH";
