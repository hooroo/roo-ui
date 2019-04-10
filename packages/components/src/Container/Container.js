import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { maxWidth, space, themeGet } from 'styled-system';

const gutter = (props) => {
  const gutterValue = themeGet(`gutters.${props.gutter}`, props.gutter)(props);

  const gutterStyles = unit => ({
    paddingLeft: themeGet(`space.${unit}`)(props),
    paddingRight: themeGet(`space.${unit}`)(props),
  });

  if (!gutterValue) {
    return null;
  }

  if (!Array.isArray(gutterValue)) {
    return gutterStyles(gutterValue);
  }

  return gutterValue.map((value, index) => {
    if (index === 0) {
      return gutterStyles(value);
    }

    return {
      [themeGet(`mediaQueries.${index - 1}`)(props)]:
        gutterStyles(value),
    };
  });
};

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${maxWidth}
  ${gutter}
  ${space}
`;

Container.propTypes = {
  gutter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  ]),
  ...maxWidth.propTypes,
  ...space.propTypes,
};

Container.defaultProps = {
  maxWidth: 'default',
  gutter: 'default',
};

Container.displayName = 'Container';

export default Container;
