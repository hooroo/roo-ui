import styled from 'styled-components';
import tag from 'clean-tag';
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

const Container = styled(tag)`
  margin-left: auto;
  margin-right: auto;
  width: 100%;

  ${maxWidth}
  ${gutter}
  ${space}
`;

Container.propTypes = {
  ...maxWidth.propTypes,
  ...space.propTypes,
};

Container.defaultProps = {
  maxWidth: 'default',
  gutter: 'default',
};

export default Container;
