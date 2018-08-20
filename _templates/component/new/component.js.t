---
to: <%= componentsRoot %>/<%= componentPath %>/<%= componentName %>.js
---
import React from 'react';
import PropTypes from 'prop-types';

const <%= componentName %> = props => <div>{props.children}</div>;

<%= componentName %>.propTypes = {
  children: PropTypes.node.isRequired,
};

export default <%= componentName %>;

