import React, { Component } from 'react';
import styled from 'styled-components';
import tag from 'clean-tag';
import { themeGet } from 'styled-system';
import { rem } from 'polished';

import { Input, Icon, NakedButton } from '..';

const CleanInput = styled(tag.input)`
  padding-right: ${rem('90px')};
`;

const Wrapper = styled.div`
  position: relative;
`;

const Toggle = styled(NakedButton)`
  position: absolute;
  height: 100%;
  top: 0;
  left: calc(100% - ${rem('80px')});
  font-size: ${themeGet('fontSizes.sm')};
  color: ${themeGet('colors.grey.1')};
  text-decoration: underline;

  &:focus {
    color: ${themeGet('colors.grey.0')};
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
        <CleanInput
          {...this.props}
          type={this.state.visible ? 'text' : 'password'}
        />

        <Toggle onClick={this.toggleVisibility}>
          <Icon
            name={this.state.visible ? 'visibilityOff' : 'visibility'}
            size={22}
            mr={2}
          />

          {this.state.visible ? 'Hide' : 'Show'}
        </Toggle>
      </Wrapper>
    );
  }
}

const PasswordInput = Input.withComponent(Base);

export default PasswordInput;
