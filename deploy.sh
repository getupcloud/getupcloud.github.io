#!/bin/bash
set -e

usage()
{
	echo "Usage: $1 [-b] [BUILD_ID]"
	echo "  -b          Build site before deploy"
	echo "  BUILD_ID    Git tag used."
}

DO_BUILD=0
export BUILD_ID=
for opt; do
	case $opt in
		-h) usage; exit 0 ;;
		-b) DO_BUILD=1 ;;
		*)
			if [ -n "$BUILD_ID" ]; then
				usage
				exit 1
			fi
			BUILD_ID=$1
	esac
	shift
done

[ -n "$BUILD_ID" ] || BUILD_ID=build-`date +%Y%m%d%H%M%S`

if git tag|grep -q "^$BUILD_ID$"; then
	echo Git tag already exists: $BUILD_ID
	exit 1
fi

if [ "$DO_BUILD" == 1 ]; then
	./build.sh
fi

set -xu

# ensure we dont lose a bit
git commit -a || true

# tag this build
git tag $BUILD_ID

# prepare master to push
git checkout master
mv build .build
rm -rf *  # wont remove .build
mv .build/* .
rmdir .build
git add .
git commit -m $BUILD_ID

# push this build
git push origin master
git push origin $BUILD_ID

echo You are now on branch:
git branch
