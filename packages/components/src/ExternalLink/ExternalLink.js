import styled from '@emotion/styled';
import { themeGet } from 'styled-system';
import { Link } from '..';

const ExternalLink = styled(Link)`
  color: ${themeGet('colors.greys.charcoal')};
`;

ExternalLink.defaultProps = {
  ...Link.defaultProps,
  rel: 'noopener noreferrer',
  target: '_blank',
  title: 'Link opens in new window',
};

export default ExternalLink;
