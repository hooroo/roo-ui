import { themeGet } from 'styled-system';
import { Link } from '..';

const ExternalLink = Link.extend`
  color: ${themeGet('colors.grey.0')};
`;

ExternalLink.defaultProps = {
  ...Link.defaultProps,
  rel: 'noopener noreferrer',
  target: '_blank',
  title: 'Link opens in new window',
};

export default ExternalLink;
