#!/usr/bin/env bash
shopt -s extglob
set -e

ls -l
mkdir ../tmp/polaris-react
mv !(node_modules|web/node_modules|polaris-styleguide/node_modules) ../tmp/polaris-react
mv ../tmp/polaris-react polaris-react
git clone ssh://git@github.com/Shopify/$1 --depth 1
ls -l
ls -l $1
yarn --cwd ./$1 add file:../polaris-react
