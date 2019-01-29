#!/usr/bin/env bash
shopt -s extglob
set -e

ls -l
mkdir ../tmp/polaris-react
mv !(node_modules|web|polaris-styleguide) ../tmp/polaris-react
ls -l
if [ -d "$1" ]; then
  mv $1 $1tmp
fi
ls -l
git clone ssh://git@github.com/Shopify/$1 --depth 1
ls -l
if [ -d "$1tmp" ]; then
  mv $1tmp/* $1
fi
ls -l
ls -l $1
yarn --cwd ./$1 add file:../polaris-react
