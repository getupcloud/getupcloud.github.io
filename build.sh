#!/bin/bash
set -e

#echo
#echo Updating npm
#npm update

cd server

npm_install=0
npm_start=0
for i; do
	case "$1" in
		-i|--npm-install) npm_install=1;;
		-s|--server) npm_start=1;
	esac
	shift
done

if [ "$npm_install" -eq 1 ]; then
	echo Installing npm modules...
	npm install
fi

echo Generating build...

rm -rf ../build

# node build
node builder

# copy common files
echo Copying common files...
cp -a public/* ../build/
cp -a public/.htaccess ../build/.htaccess

if [ "$npm_start" -eq 1 ]; then
	npm start
fi
