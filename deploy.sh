#!/bin/bash
set -ex

if [ $# -eq 1 -a "$1" == '-b' ]; then
	./build.sh
fi
set -u

# ensure we dont lose a bit
git commit -a || true

# tag this build
BUILD_TAG=build-`date +%Y%m%d%H%M%S`
git tag $BUILD_TAG

# prepare master to push
git checkout master
mv build .build
rm -rf *  # wont remove .build
mv .build/* .
rmdir .build
git add .
git commit -m $BUILD_TAG

# push this build
git push origin master
git push origin $BUILD_TAG
