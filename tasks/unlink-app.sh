#!/usr/bin/env bash

if [ -z "$1" ]; then
  echo "Usage: $0 [path-to-consuming-app]"
  exit 1
fi

roo_path="$(cd `dirname $0`/.. && pwd)"
consumer_path="$(cd $1 && pwd)"
packages=($(yarn lerna ls | grep @roo-ui))

cd "$consumer_path"

# Remove links in comsumer
cd $consumer_path
for package in ${packages[@]/*v*/}; do
  yarn unlink "$package"
done

yarn unlink "styled-components"

echo "reinstall dependencies"
yarn --check-files

cd "$roo_path"

yarn lerna exec 'yarn unlink'

cd "$roo_path/node_modules/styled-components"

yarn unlink
