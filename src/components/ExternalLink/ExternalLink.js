import styled from '@emotion/styled';
import { Link } from '../';

const ExternalLink = styled(Link)``;

ExternalLink.defaultProps = {
  ...Link.defaultProps,
  rel: 'noopener noreferrer',
  target: '_blank',
  title: 'Link opens in new window',
  color: 'greys.charcoal',
};

export default ExternalLink;
