#!/usr/bin/env bash

# This script works for me as of Module 13.5.5
# You will need to change branch, dir, and file names/paths for each use.

# start out in the main branch
git checkout main

# the symbolic git branch names
otherBranch=Mapping_GeoJSON_Polygons
thisBranch=Earthquakes_past7days

# the real directory names
otherDir=Mapping_GeoJSON_Polygons
thisDir=Earthquakes_past7days

# if the dir for the new branch doesn't exist create it
if [ ! -d $thisBranch ]; then
	git checkout -b $thisBranch
	mkdir $thisDir
fi
git checkout $thisBranch

# create destination dirs if they don't already exist
if [ ! -d $thisDir/static/css ]; then
	mkdir -p $thisDir/static/css
fi
if [ ! -d $thisDir/static/js ]; then
	mkdir -p $thisDir/static/js 
fi

# basically 'cat' the files from the latest version of one branch to a new one
git show $otherBranch:$otherDir/index.html           > $thisDir/index.html
git show $otherBranch:$otherDir/static/css/style.css > $thisDir/static/css/style.css
git show $otherBranch:$otherDir/static/js/config.js  > $thisDir/static/js/config.js
git show $otherBranch:$otherDir/static/js/logic.js   > $thisDir/static/js/logic.js
