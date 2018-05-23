import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Flex, Icon } from '..';

const iconType = (rating, index, ratingType) => {
  const ratingTypeIcon = (ratingType === 'AAA') ? 'star' : 'circle';

  if (index < rating - 0.5) return `${ratingTypeIcon}`;
  if (index < rating) return `${ratingTypeIcon}Half`;
  return `${ratingTypeIcon}Border`;
};

const renderRating = ({ ratingType, rating, size }) => {
  const ratingItems = [];

  _.range(5).forEach((index) => {
    ratingItems.push(<Icon
      name={iconType(rating, index, ratingType)}
      key={index}
      color="starRating"
      size={size}
    />);
  });

  return ratingItems;
};

class StarRating extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { ratingType } = this.props;
    const { rating } = this.props;
    const { size } = this.props;
    return (
      <Flex
        itemType="http://schema.org/AggregateRating"
        aria-label={`${rating} out of 5 rating`}
        title={`${rating} out of 5 rating`}
      >
        {renderRating({ ratingType, rating, size })}
      </Flex>
    );
  }
}

StarRating.propTypes = {
  rating: PropTypes.string.isRequired,
  ratingType: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
};

export default StarRating;
