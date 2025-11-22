#!/usr/bin/env pwsh
$ErrorActionPreference = 'Stop'

$LAMBDA_NAME = 'example-lambda'
$ZIP_FILE = "$LAMBDA_NAME.zip"

Write-Output "Building Lambda package..."

# clean previous build
if (Test-Path $ZIP_FILE) { Remove-Item $ZIP_FILE -Force }

# (optional) install dependencies into a package directory
# New-Item -ItemType Directory -Path package -Force | Out-Null
# pip install -r requirements.txt --target ./package

# zip the code (and dependencies if needed)
# Push-Location package
# Compress-Archive -Path * -DestinationPath ("../" + $ZIP_FILE) -Force
# Pop-Location
Compress-Archive -Path 'main.py' -DestinationPath $ZIP_FILE -Force

Write-Output "Created $ZIP_FILE"
Get-Item $ZIP_FILE | Select-Object Name, @{Name='Size';Expression={"{0:N0}" -f ($_.Length)}}, LastWriteTime
