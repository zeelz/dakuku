#!/bin/bash

# -- ssh
ssh u1029-ksaosf26iigg@ssh.dakukupeterside.com -p18765 &&

# -- pull everything to ~
cd www/dakukupeterside.com/
git pull origin main

# -- mv dist to www/public_html
cp -rf dist/* public_html