/* eslint-disable no-console */
const fs = require('fs-extra');
const { basename, dirname } = require('path');
const SVGI = require('svgi');
const camelCase = require('lodash/camelCase');
const last = require('lodash/last');
const fp = require('lodash/fp');
const isVarName = require('is-var-name');
const glob = require('glob');
const prettier = require('prettier');

const srcDir = 'src/**/*.svg';
const filepath = 'dist/index.js';

const isValidIconName = (name) => {
  if (!isVarName(name)) {
    return false;
  }
  return isVarName(name) && !['public'].includes(name);
};

const flattenChildren = (a, b) => {
  const children = b.children.reduce(flattenChildren, []);
  return [...a, b, ...children];
};

const svgToPath = (svgFile) => {
  const svg = fs.readFileSync(svgFile, 'utf8');
  const { nodes } = new SVGI(svg).report();
  return nodes.children
    .reduce(flattenChildren, [])
    .filter(child => child.type === 'path')
    .map(child => child.properties.d)
    .join(' ');
};

const readIcons = dir =>
  glob.sync(dir).map(file => ({
    key: camelCase(basename(file, '.svg')),
    category: camelCase(last(dirname(file).split('/'))),
    path: svgToPath(file),
  }));

const iconToExport = ({ key, category, path }) => `export const ${key} = ${JSON.stringify({ category, path })};\n`;

const uniqueByKey = fp.uniqBy('key');

const partitionByValidName = fp.partition(icon => isValidIconName(icon.key));

const build = () => {
  fs.emptyDirSync(dirname(filepath));
  const allIcons = uniqueByKey(readIcons(srcDir));
  const [validIcons, invalidIcons] = partitionByValidName(allIcons);

  console.log(`Skipping icons with invalid variable names: [${invalidIcons.map(icon => JSON.stringify(icon.key)).join(', ')}]`);

  const moduleContents = prettier.format(validIcons.map(iconToExport).join('\n'), { parser: 'babel' });
  fs.writeFileSync(filepath, moduleContents, 'utf8');
};

build();
