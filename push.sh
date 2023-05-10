#!/bin/bash

astro build &&
git add .
git commit -m "new updates"
git push

# rm -rf dist2 &&
# mv -f dist dist2
# cd dist
# mv -f . ./../dist-bk &&

# cat empty.md

# cd dist-bk &&
# git add . &&
# git commit -m "new updates" &&
# git push

# --

# - push everything
# - pull everything to ~
# - mv dist to www/public_html