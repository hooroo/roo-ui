import Text from '../Text';

const Heading = Text.withComponent('p');

Heading.defaultProps = {
  ...Text.defaultProps,
  m: 0,
  mb: 2,
  textStyle: 'h3',
};

Heading.h1 = Heading.withComponent('h1');
Heading.h1.defaultProps = {
  ...Heading.defaultProps,
  textStyle: 'h1',
};

Heading.h2 = Heading.withComponent('h2');
Heading.h2.defaultProps = {
  ...Heading.defaultProps,
  textStyle: 'h2',
};

Heading.h3 = Heading.withComponent('h3');
Heading.h3.defaultProps = {
  ...Heading.defaultProps,
  textStyle: 'h3',
};

Heading.h4 = Heading.withComponent('h4');
Heading.h4.defaultProps = {
  ...Heading.defaultProps,
  textStyle: 'h4',
};

Heading.h5 = Heading.withComponent('h5');
Heading.h5.defaultProps = {
  ...Heading.defaultProps,
  textStyle: 'h5',
};

Heading.h6 = Heading.withComponent('h6');
Heading.h6.defaultProps = {
  ...Heading.defaultProps,
  textStyle: 'h6',
};

export default Heading;
