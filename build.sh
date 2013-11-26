#!/bin/bash
set -e

usage()
{
}

echo
echo Generating build...

rm -rf build

# node build
node builder

# copy common files
echo Copying common files...
echo
cp -a public/* build/