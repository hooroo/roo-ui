require('jest-styled-components');

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const omit = require('lodash/omit');
const { createSerializer } = require('enzyme-to-json');
const { toHaveNoViolations } = require('jest-axe');

expect.addSnapshotSerializer(createSerializer({
  map: node =>
    omit(node, [
      'props.forwardedComponent',
      'props.theme',
      'props.blacklist',
    ]),
}));

enzyme.configure({ adapter: new Adapter() });

expect.extend(toHaveNoViolations);
