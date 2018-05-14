import React from 'react';
import { Link } from '..';

const ExternalLink = ({
  ...props
}) => (
  <Link
    {...props}
    color="grey.0"
    rel="noopener noreferrer"
    target="_blank"
    title="Link opens in new window"
  />
);

ExternalLink.propTypes = {
  ...Link.propTypes,
};

export default ExternalLink;
