import styled from '@emotion/styled';
import { system } from 'styled-system';
import { propType } from '@styled-system/prop-types';
import Box from '../Box';

const customProps = system({
  flexFlow: true,
});

const Flex = styled(Box)(customProps);

Flex.propTypes = {
  flexFlow: propType,
};

Flex.defaultProps = {
  display: 'flex',
};

export default Flex;
