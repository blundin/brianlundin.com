#!/usr/bin/env bash
DEFAULT="personal-blog"
PROFILE=${AWS_PROFILE:-$DEFAULT}
BUCKET=brianlundin.com
DIR=_site/

# Color stuff
##
NORMAL=$(tput sgr0)
RED=$(tput setaf 1)
GREEN=$(tput setaf 2; tput bold)
YELLOW=$(tput setaf 3)

function red() {
    echo "$RED$*$NORMAL"
}

function green() {
    echo "$GREEN$*$NORMAL"
}

function yellow() {
    echo "$YELLOW$*$NORMAL"
}

red '--> Gzipping all html, css and js files'
find $DIR \( -iname '*.html' -o -iname '*.css' -o -iname '*.js' \) -exec gzip -9 -n {} \; -exec mv {}.gz {} \;

yellow '--> Uploading css files'
aws s3 sync $DIR s3://$BUCKET/ --exclude '*' --include '*.css' --content-type 'text/css' --cache-control 'max-age=604800' --content-encoding 'gzip' --size-only --profile "$PROFILE"

yellow '--> Uploading js files'
aws s3 sync $DIR s3://$BUCKET/ --exclude '*' --include '*.js' --content-type 'application/javascript' --cache-control 'max-age=604800' --content-encoding 'gzip' --size-only --profile "$PROFILE"

# Sync media files first (Cache: expire in 10weeks)
yellow '--> Uploading images (jpg, png, ico)'
aws s3 sync $DIR s3://$BUCKET/ --exclude '*' --include '*.jpg' --include '*.png' --include '*.ico' --expires 'Sat, 20 Nov 2020 18:46:39 GMT' --cache-control 'max-age=604800' --size-only --profile "$PROFILE"

# Sync html files (Cache: 2 hours)
yellow '--> Uploading html files'
aws s3 sync $DIR s3://$BUCKET/ --exclude '*' --include '*.html' --content-type 'text/html' --cache-control 'max-age=604800' --content-encoding 'gzip' --size-only --profile "$PROFILE"

# # Sync everything else
yellow '--> Syncing ios association file'
aws s3 sync $DIR s3://$BUCKET/ --include '/.well-known/*' --content-type 'application/json' --size-only --delete --profile "$PROFILE"

# # Sync everything else
yellow '--> Syncing everything else'
aws s3 sync $DIR s3://$BUCKET/ --size-only --delete --profile "$PROFILE"