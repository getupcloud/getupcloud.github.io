#!/bin/bash
set -e

usage()
{
	echo "Usage: $1 [--server[=PORT]]"
	echo "Usage: $1 [--assets]"
	echo "  --server[=PORT]     Start serving built files on port [PORT] (default=9090)."
	echo "  --assets            Only build the assets."
}


PORT=9090
SERVER=0
ONLY_ASSETS=0

for opt; do
	case $opt in
		-h|--help) usage; exit 0 ;;
		--server*)
			SERVER=1
			_port=`echo $opt|sed -ne 's/--server=\(.*\)/\1/p'`
			[ -n "$_port" ] && PORT=$_port
			;;
		--assets*)
			ONLY_ASSETS=1
			;;
		*)
			if [ -n "$BUILD_ID" ]; then
				usage
				exit 1
			fi
			BUILD_ID="$1"
	esac
	shift
done

# site config
export BROKER=${BROKER:-https://broker.getupcloud.com}
export SIGNUP=${SIGNUP:-$BROKER/getup/account/signup/}
export SITE=${SITE:-http://getupcloud.com/}
export SUPPORT=${SUPPORT:-https://getup.zendesk.com/home/}
export DEBUG=0
export BUILD_ID=${BUILD_ID:-testing-`date +%Y%m%d%H%M%S`}
export TEXTDOMAINDIR=$PWD/locale
export TEXTDOMAIN=site
export GETTEXT_PATH=$PWD/gettext

# languages we support
LANGS=(
	pt_BR
	en_US
)

# what is the main site language
ROOT_LANG=pt_BR

echo
echo Generating build...

if [ $ONLY_ASSETS -eq 0 ]; then
	rm -rf build
	mkdir build
	for po in locale/*/LC_MESSAGES/*po; do
		msgfmt $po -o ${po%.po}.mo
	done
fi

# copy common files
echo Copying common files...
echo
cp -a common/* build/

# execute all templates, creating resulting file inside build/ with
# extension striped

cd templates

if [ $ONLY_ASSETS -eq 0 ]; then

echo Building from template...
cat <<EOF
  BROKER=$BROKER
  SITE=$SITE
  SIGNUP=$SIGNUP
  DEBUG=$DEBUG
  LANGS=${LANGS[*]}

EOF

function gettext()
{
	$GETTEXT_PATH "$@"
	#echo -n "GETTEXT($LANGUAGE): $@ -> " >&2
	#$GETTEXT_PATH $@ >&2
	#echo
}

# templates are simple shell scripts ending in .sh

	find . -type f -name '*.sh' | while read source; do
		for lang in ${LANGS[*]}; do
			# format language name to use in templates
			# ex: pt_BR -> pt-br
			export LANGUAGE_ID=`echo $lang|tr _[A-Z] -[a-z]`

			# find out where this file lives inside ../build/
			[ $lang == $ROOT_LANG ] && unset LANG_SUFFIX || LANG_SUFFIX=_${LANGUAGE_ID%-*}

			# cosmetics
			target=${source#./}
			target=../build/${target%.sh}

			# prepend lang suffix
			# ex: index.html -> index_lang.html
			if [ -n "$LANG_SUFFIX" ]; then
				base="${target%.*}"
				ext="${target##*.}"
				target="${base}${LANG_SUFFIX}.${ext}"
			fi
			echo " $source -> $target ($LANGUAGE_ID)"

			# create prefix dir
			# ex: some/dir/path.html -> some/dir/
			mkdir -p ${target%/*}

			# real work
			export LANGUAGE=$lang
			source $source > $target
		done
	done
fi


TEMP_FILES=`find ../build -name '*.swp' -o -name '*.bak' -o -name '*.bkp'`
if [ -n "$TEMP_FILES" ]; then
	echo
	echo Removing temp files...
	rm -vf $TEMP_FILES
fi

if [ $SERVER -eq 1 ]; then
	( cd ../build && python -m SimpleHTTPServer $PORT )
fi
