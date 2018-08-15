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

# Link packages in consuming app
cd $consumer_path
for package in ${packages[@]/*v*/}; do
  yarn link "$package"
done

# Link styled-components
rm -rf "$consumer_path/node_modules/styled-components"
ln -s \
  "$roo_path/node_modules/styled-components" \
  "$consumer_path/node_modules/styled-components"
