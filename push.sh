#!/bin/bash

astro build &&
git add .
git commit -m "new updates"
git push