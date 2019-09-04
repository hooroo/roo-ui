import styled from '@emotion/styled';
import propTypes, { propType } from '@styled-system/prop-types';
import { layout, space, compose, system } from 'styled-system';

const systemProps = system({
  gutter: {
    properties: ['paddingLeft', 'paddingRight'],
    scale: 'space',
  },
});

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${compose(
    layout,
    space,
    systemProps,
  )}
`;

Container.propTypes = {
  gutter: propType,
  ...propTypes.layout,
  ...propTypes.space,
};

Container.defaultProps = {
  maxWidth: '80rem',
  gutter: 3,
};

Container.displayName = 'Container';

export default Container;
