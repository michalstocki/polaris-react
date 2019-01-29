#!/usr/bin/env bash
shopt -s extglob
# set -e

if [ ! -d "cache-directory" ]; then
  mkdir cache-directory
fi

ls -l
mkdir ../tmp/polaris-react
mv !(node_modules|web|polaris-styleguide) ../tmp/polaris-react
ls -l
git clone ssh://git@github.com/Shopify/$1 --depth 1
if [ -d "cache-directory/$1" ]; then
  cp -r cache-directory/$1/node_modules $1/node_modules
fi
ls -l
ls -l $1
yarn --cwd ./$1 add file:../polaris-react
if [ -d "cache-directory/$1" ]; then
  rm -rf cache-directory/$1
fi
mkdir cache-directory/$1
mv $1/node_modules cache-directory/$1/node_modules
