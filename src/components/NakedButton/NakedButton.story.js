import React from 'react';
import { withDocs } from 'storybook-readme';
import { boolean } from '@storybook/addon-knobs';

import NakedButton from './';
import Text from '../Text';
import Image from '../Image';
import Heading from '../Heading';
import Flex from '../Flex';
import README from './README.md';

export default {
  title: 'Components/NakedButton',
  decorators: [withDocs(README)],
};

export const Default = () => <NakedButton mt={3}>Hello world</NakedButton>;

Default.story = {
  name: 'default',
};

export const LinkStyle = () => (
  <Text>
    Perhaps you would like to open a{' '}
    <NakedButton
      color="ui.link"
      hoverColor="ui.linkHover"
      textDecoration="underline"
      disabled={boolean('Disabled', false)}
    >
      modal window
    </NakedButton>
  </Text>
);

LinkStyle.story = {
  name: 'link style',
};

export const WrapContent = () => (
  <NakedButton textAlign="left" disabled={boolean('Disabled', false)}>
    <Heading.h2>Guest Reviews</Heading.h2>
    <Flex alignItems="center" mb="3">
      <Text fontSize="lg">Excellent, 5.0</Text>
      <Image
        src="https://www.tripadvisor.com/img/cdsi/img2/ratings/traveler/5.0-15969-4.svg"
        inline
        height="20px"
        px="2"
      />
      <Text>1256 Reviews</Text>
    </Flex>
    <Text color="brand.primary" textDecoration="underline">
      Read Reviews
    </Text>
  </NakedButton>
);

WrapContent.story = {
  name: 'wrap content',
};
