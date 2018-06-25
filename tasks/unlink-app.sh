#!/usr/bin/env bash

packages=($(yarn lerna ls | grep @roo-ui))
packages+=('styled-components')

cd $1

for package in ${packages[@]/*v*/}; do
  yarn unlink "$package"
  echo "unlinked $package 🙌"
done

echo "reinstall dependencies"
yarn --check-files

cd -

yarn lerna exec 'yarn unlink'
