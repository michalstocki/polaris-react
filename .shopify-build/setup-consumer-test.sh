#!/usr/bin/env bash
shopt -s extglob
set -e

ls -l
mkdir ../tmp/polaris-react
mv -v !(node_modules|web|polaris-styleguide) ../tmp/polaris-react
mv -v ../tmp/polaris-react polaris-react
git clone ssh://git@github.com/Shopify/$1 --depth 1
ls -l
ls -l $1
yarn --cwd ./$1 add file:../polaris-react
