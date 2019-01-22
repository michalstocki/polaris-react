#!/usr/bin/env bash

ls -l
ls -l ../
git clone ssh://git@github.com/Shopify/$1
cd $1
ls -l
yarn
yarn add file:../polaris-react
yarn run build
