const { createSerializer } = require('enzyme-to-json');
const { toHaveNoViolations } = require('jest-axe');
const Adapter = require('enzyme-adapter-react-16');
const emotionSerializer = require('jest-emotion');
const enzyme = require('enzyme');
const omit = require('lodash/omit');

expect.addSnapshotSerializer(emotionSerializer);
expect.addSnapshotSerializer(
  createSerializer({
    map: node => omit(node, ['props.forwardedComponent', 'props.theme']),
  }),
);

enzyme.configure({ adapter: new Adapter() });

expect.extend(toHaveNoViolations);
