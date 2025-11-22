#!/bin/bash
set -e

LAMBDA_NAME="example-lambda"
ZIP_FILE="${LAMBDA_NAME}.zip"

echo "Building Lambda package..."

# clean previous build
rm -f $ZIP_FILE

# (optional) install dependencies into a package directory
# mkdir -p package
# pip install -r requirements.txt --target ./package

# zip the code (and dependencies if needed)
# cd package && zip -r9 ../$ZIP_FILE . && cd ..
zip -r9 $ZIP_FILE main.py

echo "Created $ZIP_FILE"
ls -lh $ZIP_FILE
