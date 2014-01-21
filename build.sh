#!/bin/bash
set -e

#echo
#echo Updating npm
#npm update

npm install

echo
echo Generating build...

rm -rf build

# node build
node builder

# copy common files
echo Copying common files...
echo
cp -a public/* build/
cp -a public/.htaccess build/.htaccess