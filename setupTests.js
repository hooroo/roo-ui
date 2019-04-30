
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const omit = require('lodash/omit');
const { createSerializer } = require('enzyme-to-json');
const emotionSerializer = require('jest-emotion');
const { toHaveNoViolations } = require('jest-axe');

expect.addSnapshotSerializer(emotionSerializer);
expect.addSnapshotSerializer(createSerializer({
  map: node =>
    omit(node, [
      'props.forwardedComponent',
      'props.theme',
    ]),
}));

enzyme.configure({ adapter: new Adapter() });

expect.extend(toHaveNoViolations);
