import React, { Component } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { rem } from 'polished';
import cleanElement from 'clean-element';

import { Input, Icon, NakedButton } from '..';

const CleanInput = cleanElement(Input);
CleanInput.propTypes = Input.propTypes;
CleanInput.displayName = 'PasswordInput__Input';

const Wrapper = styled.div`
  position: relative;
`;

const Toggle = styled(NakedButton)`
  position: absolute;
  height: 100%;
  top: 0;
  left: calc(100% - ${rem('80px')});
  font-size: ${themeGet('fontSizes.sm')};
  color: ${themeGet('colors.greys.steel')};
  text-decoration: underline;

  &:focus {
    color: ${themeGet('colors.greys.charcoal')};
    outline: none;
  }
`;

class Base extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  toggleVisibility() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <Wrapper>
        <CleanInput {...this.props} type={this.state.visible ? 'text' : 'password'} />

        <Toggle onClick={this.toggleVisibility}>
          <Icon name={this.state.visible ? 'visibilityOff' : 'visibility'} size={22} mr={2} />

          {this.state.visible ? 'Hide' : 'Show'}
        </Toggle>
      </Wrapper>
    );
  }
}

const PasswordInput = Input.withComponent(Base);

PasswordInput.defaultProps = {
  pr: rem('90px'),
};

export default PasswordInput;
