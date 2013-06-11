#!/bin/bash
set -e

# site config
export BROKER=https://broker.getupcloud.com
export SITE=http://getupcloud.com/
export REGISTER=https://broker.getupcloud.com/getup/account/signup/
export DEBUG=0

# languages we support
LANGS=(pt_BR en)

# what is the main site language
ROOT_LANG=pt_BR

# gettext config
export TEXTDOMAINDIR=$PWD/locale
export TEXTDOMAIN=site

echo
echo Recreating build environment...
rm -rf build
mkdir build
for po in locale/*/LC_MESSAGES/*po; do
	msgfmt $po -o ${po%.po}.mo
done

# copy static dir to root dir only
echo
echo Copying static files to root dir...
cp -rva static/ build/

# copy common files to each language subdir
echo
echo Copying common files to language dirs...
for lang in ${LANGS[*]}; do
	[ $lang == $ROOT_LANG ] && unset LANG_DIR || LANG_DIR=$lang/
	mkdir -p build/$LANG_DIR
	cp -rva common/* build/$LANG_DIR
done

# execute all templates, creating resulting file inside build/ with
# extension striped
echo
echo Building from template...
cat <<EOF
  BROKER=$BROKER
  SITE=$SITE
  REGISTER=$REGISTER
  DEBUG=$DEBUG

EOF

# languages we support
LANGS=(pt_BR en)
cd templates

find -type f ! -name '*.swp' | while read file; do
	for lang in ${LANGS[*]}; do
		LANGUAGE_ID=`echo $lang|tr -t _[A-Z] -[a-z]`
		# find out where this file lives
		[ $lang == $ROOT_LANG ] && unset LANG_DIR || LANG_DIR=$LANGUAGE_ID/

		# cosmetics
		target=`readlink -f ../build/$LANG_DIR/${file%.*}` # full path
		target=${target#$PWD?}                             # remove leading $PATH
		echo " $file -> $target ($LANGUAGE_ID)"

		# real work
		LANGUAGE=$lang source $file > $target
	done
done
