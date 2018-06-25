#!/usr/bin/env bash

packages=($(yarn lerna ls | grep @roo-ui))
packages+=('styled-components')

yarn lerna exec 'yarn link'

cd $1

for package in ${packages[@]/*v*/}; do
  yarn link "$package"
  echo "linked $package 🙌"
done
