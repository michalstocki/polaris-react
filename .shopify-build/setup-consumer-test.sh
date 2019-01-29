#!/usr/bin/env bash
shopt -s extglob
#set -e

ls -l
mkdir ../tmp/polaris-react
mv !(node_modules|web|polaris-styleguide) ../tmp/polaris-react
mv ../tmp/polaris-react polaris-react
ls -l
if [ -d "$1" ]; then
  ls -l $1
  mv $1/node_modules ./
  rm -rf $1
  git clone --depth 1 ssh://git@github.com/Shopify/$1
  mv node_modules $1/
else
  git clone --depth 1 ssh://git@github.com/Shopify/$1
fi
ls -l
ls -l $1
yarn --cwd ./$1 add file:../polaris-react
