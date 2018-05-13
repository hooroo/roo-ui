import { Link } from '..';

const BlockLink = Link.extend`
  display: block;
  color: inherit;
  text-decoration: none;
`;

BlockLink.displayName = 'BlockLink';

export default BlockLink;
