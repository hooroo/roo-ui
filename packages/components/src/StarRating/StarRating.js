import React from 'react';
import range from 'lodash/range';
import PropTypes from 'prop-types';
import { Flex, Icon } from '..';

const iconType = (rating, index, ratingType) => {
  const ratingTypeIcon = ratingType === 'AAA' ? 'star' : 'circle';

  if (index < rating - 0.5) return `${ratingTypeIcon}`;
  if (index < rating) return `${ratingTypeIcon}Half`;
  return `${ratingTypeIcon}Border`;
};

const renderRating = ({ ratingType, rating, size }) => {
  const ratingItems = [];

  range(5).forEach((index) => {
    ratingItems.push(<Icon
      name={iconType(rating, index, ratingType)}
      key={index}
      color="brightSun"
      size={size}
    />);
  });

  return ratingItems;
};

const StarRating = ({ ratingType, rating, size }) => (
  <Flex
    itemType="http://schema.org/AggregateRating"
    aria-label={`${rating} out of 5 rating`}
    title={`${rating} out of 5 rating`}
  >
    {renderRating({ ratingType, rating, size })}
  </Flex>
);

const stringOrNumber = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

StarRating.propTypes = {
  rating: stringOrNumber.isRequired,
  ratingType: PropTypes.oneOf(['AAA', 'SELF_RATED']).isRequired,
  size: stringOrNumber.isRequired,
};

export default StarRating;
