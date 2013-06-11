#!/bin/bash
set -exu

./build.sh
git commit -a || true
BUILD_TAG=build-`date +%Y%m%d%H%M%S`
git tag $BUILD_TAG
git checkout master
mv build/* .
rmdir build/
git commit -a -m $BUILD_TAG
git push
