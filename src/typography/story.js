import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs/react';
import { withDocs } from 'storybook-readme';
import README from './README.md';
import {
  BlockLink,
  ExternalLink,
  Heading,
  Input,
  Box,
  Label,
  Link,
  Paragraph,
} from '../components';
import theme from '../theme';

const getColorsByGroup = group =>
  Object.entries(theme.colors[group]).reduce((reduced, [key, value]) => {
    reduced[`${group}.${key}`] = value;
    return reduced;
  }, {});

const getNamedColors = () =>
  Object.entries(theme.colors).reduce(
    (reduced, [key, value]) => {
      if (typeof theme.colors[key] === 'string') {
        reduced[key] = value;
      }

      return reduced;
    },
    { Default: null },
  );

const getColors = () => ({
  ...getNamedColors(),
  ...getColorsByGroup('brand'),
  ...getColorsByGroup('greys'),
});

storiesOf('Foundations|Typography', module)
  .addDecorator(withDocs(README))
  .add('default', () => {
    const textKnobProps = {
      textDecoration: select(
        'Text Decoration',
        { None: null, underline: 'underline', 'line-through': 'line-through' },
        null,
      ),
      fontWeight: select('Font Weight', ['normal', 'bold'], 'normal'),
      lineHeight: select('Line Height', ['normal', 'tight', 'loose'], 'normal'),
      letterSpacing: select('Letter Spacing', ['normal', 'wide'], 'normal'),
      textStyle: select('Text Style', { None: null, caps: 'caps' }, null),
      color: select('Colour', getColors(), null),
    };

    const linkKnobProps = {
      href: 'https://www.qantas.com',
      target: '_blank',
      underline: boolean('Underline Links', false),
    };

    return (
      <>
        <Heading.h2>Headings</Heading.h2>
        <Box p={6} mb={6} bg="greys.porcelain">
          <Heading.h1 {...textKnobProps}>Heading 1</Heading.h1>
          <Heading.h2 {...textKnobProps}>Heading 2</Heading.h2>
          <Heading.h3 {...textKnobProps}>Heading 3</Heading.h3>
          <Heading.h4 {...textKnobProps}>Heading 4</Heading.h4>
          <Heading.h5 {...textKnobProps}>Heading 5</Heading.h5>
          <Heading.h6 {...textKnobProps}>Heading 6</Heading.h6>
        </Box>

        <Heading.h2>Text/Paragraph</Heading.h2>
        <Box p={6} mb={6} bg="greys.porcelain">
          <Paragraph fontSize="xs" {...textKnobProps}>
            Extra-Small (xs) Text
          </Paragraph>
          <Paragraph fontSize="sm" {...textKnobProps}>
            Small (sm) Text
          </Paragraph>
          <Paragraph fontSize="base" {...textKnobProps}>
            Base-Size (base) Text
          </Paragraph>
          <Paragraph fontSize="lg" {...textKnobProps}>
            Large (lg) Text
          </Paragraph>
          <Paragraph fontSize="xl" {...textKnobProps}>
            Extra-Large (xl) Text
          </Paragraph>
          <Paragraph fontSize="2xl" {...textKnobProps}>
            Extra-Extra-Large (2xl) Text
          </Paragraph>
          <Paragraph fontSize="3xl" {...textKnobProps}>
            Extra-Extra-Extra-Large (3xl) Text
          </Paragraph>
          <Paragraph fontSize="4xl" {...textKnobProps}>
            Extra-Extra-Extra-Extra-Large (4xl) Text
          </Paragraph>
        </Box>

        <Heading.h2>Label</Heading.h2>
        <Box p={6} mb={6} bg="greys.porcelain">
          <Label>A Label For A Form Field</Label>
          <Input placeholder="Sample form field" />
        </Box>

        <Heading.h2>Links</Heading.h2>
        <Box p={6} mb={6} bg="greys.porcelain">
          <Box mb={2}>
            <Link {...linkKnobProps}>A regular internal link</Link>
          </Box>

          <Box mb={2}>
            <ExternalLink {...linkKnobProps}>
              An external link to the outside world
            </ExternalLink>
          </Box>

          <Box mb={2}>
            <BlockLink p={3} bg="white" {...linkKnobProps}>
              A block link
            </BlockLink>
          </Box>
        </Box>
      </>
    );
  });
