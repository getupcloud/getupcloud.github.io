#!/bin/bash
set -xe

php composer.phar install
for po in App/i18n/*/LC_MESSAGES/*.po; do
	msgfmt $po -o ${po%.po}.mo
done
php build.php
git commit -a
