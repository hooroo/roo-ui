import React from 'react';
import { withDocs } from 'storybook-readme';
import { Box, Flex, Heading } from '../';
import StarRating from './';
import README from './README.md';

export default {
  title: 'Components/StarRating',
  decorators: [withDocs(README)],
};

export const Default = () => (
  <Flex justifyContent="space-around">
    <Box>
      <Heading.h4>AAA Rated</Heading.h4>
      <StarRating rating="5" ratingType="AAA" size="20" />
      <StarRating rating="4.5" ratingType="AAA" size="20" />
      <StarRating rating="4" ratingType="AAA" size="20" />
      <StarRating rating="3.5" ratingType="AAA" size="20" />
      <StarRating rating="3" ratingType="AAA" size="20" />
      <StarRating rating="2.5" ratingType="AAA" size="20" />
      <StarRating rating="2" ratingType="AAA" size="20" />
      <StarRating rating="1.5" ratingType="AAA" size="20" />
      <StarRating rating="1" ratingType="AAA" size="20" />
    </Box>

    <Box>
      <Heading.h4>Self Rated</Heading.h4>
      <StarRating rating="5" ratingType="SELF_RATED" size="20" />
      <StarRating rating="4.5" ratingType="SELF_RATED" size="20" />
      <StarRating rating="4" ratingType="SELF_RATED" size="20" />
      <StarRating rating="3.5" ratingType="SELF_RATED" size="20" />
      <StarRating rating="3" ratingType="SELF_RATED" size="20" />
      <StarRating rating="2.5" ratingType="SELF_RATED" size="20" />
      <StarRating rating="2" ratingType="SELF_RATED" size="20" />
      <StarRating rating="1.5" ratingType="SELF_RATED" size="20" />
      <StarRating rating="1" ratingType="SELF_RATED" size="20" />
    </Box>
  </Flex>
);

Default.story = {
  name: 'default',
};
