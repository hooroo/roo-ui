const fs = require('fs');
const path = require('path');
const SVGI = require('svgi');
const camelCase = require('lodash/camelCase');
const last = require('lodash/last');
const glob = require('glob');

const srcDir = 'src/**/*.svg';
const filepath = 'paths.json';

const writeFile = data => fs.writeFileSync(filepath, JSON.stringify(data));

const readIcons = dir =>
  glob.sync(dir).map(file => ({
    key: camelCase(path.basename(file, '.svg')),
    category: camelCase(last(path.dirname(file).split('/'))),
    svg: fs.readFileSync(file, 'utf8'),
  }));

const flattenChildren = (a, b) => {
  const children = b.children.reduce(flattenChildren, []);
  return [...a, b, ...children];
};

const getPath = nodes =>
  nodes.children
    .reduce(flattenChildren, [])
    .filter(child => child.type === 'path')
    .map(child => child.properties.d)
    .join(' ');


const parseSVG = (svg) => {
  const { nodes } = new SVGI(svg).report();

  return {
    path: getPath(nodes),
  };
};

const getData = icons =>
  icons.map(icon => Object.assign({}, icon, parseSVG(icon.svg)));

const formatData = (_, icon) => Object.assign({}, _, {
  [icon.key]: {
    category: icon.category,
    path: icon.path,
  },
});

const build = () => {
  const icons = readIcons(srcDir);
  const data = getData(icons).reduce(formatData, {});
  writeFile(data);
};

build();
