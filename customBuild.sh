#!/bin/sh

PROJECT_NAME="forms"
OUTPUT_FILE="formscreator"

ng build $PROJECT_NAME --prod --output-hashing=none && \
cat dist/$PROJECT_NAME/runtime-es5.js \
dist/$PROJECT_NAME/polyfills-es5.js \
dist/$PROJECT_NAME/main-es5.js > preview/$OUTPUT_FILE.js

cp dist/$PROJECT_NAME/styles.css preview/$OUTPUT_FILE.css