require('jest-styled-components');

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const { toHaveNoViolations } = require('jest-axe');

enzyme.configure({ adapter: new Adapter() });

expect.extend(toHaveNoViolations);
