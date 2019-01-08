#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "Usage: $0 [path-to-consuming-app]"
  exit 1
fi

roo_path="$(cd `dirname $0`/.. && pwd)"
consumer_path="$(cd $1 && pwd)"
packages=($(yarn lerna ls | grep @roo-ui))

# Create links for @roo-ui/* packages
cd $roo_path
yarn lerna exec 'yarn link'

cd "$roo_path/node_modules/styled-components"

yarn link

cd "$consumer_path"
for package in ${packages[@]/*v*/}; do
  yarn link "$package"
done

yarn link styled-components
