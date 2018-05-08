import Text from '../Text';

const Heading = Text.withComponent('span');

Heading.defaultProps = {
  ...Text.defaultProps,
  fontWeight: 'bold',
  fontSize: 'lg',
};

Heading.h1 = Heading.withComponent('h1');
Heading.h1.defaultProps = {
  ...Heading.defaultProps,
  fontSize: 'xxxxxl',
};

Heading.h2 = Heading.withComponent('h2');
Heading.h2.defaultProps = {
  ...Heading.defaultProps,
  fontSize: 'xxl',
};

Heading.h3 = Heading.withComponent('h3');
Heading.h3.defaultProps = {
  ...Heading.defaultProps,
  fontSize: 'xl',
  lineHeight: 'loose',
};

Heading.h4 = Heading.withComponent('h4');
Heading.h4.defaultProps = {
  ...Heading.defaultProps,
  fontSize: 'lg',
  lineHeight: 'loose',
};

Heading.h5 = Heading.withComponent('h5');
Heading.h5.defaultProps = {
  ...Heading.defaultProps,
  fontSize: 'base',
  lineHeight: 'loose',
};

Heading.h6 = Heading.withComponent('h6');
Heading.h6.defaultProps = {
  ...Heading.defaultProps,
  fontSize: 'sm',
  lineHeight: 'loose',
};

export default Heading;
