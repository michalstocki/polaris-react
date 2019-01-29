#!/usr/bin/env bash
shopt -s extglob
set -e

ls -l
mkdir ../tmp/polaris-react
mv !(node_modules) ../tmp/polaris-react
mv ../tmp/polaris-react polaris-react
git clone ssh://git@github.com/Shopify/$1
ls -l
yarn --cwd ./$1 add file:../polaris-react
yarn --cwd ./$1 run build
