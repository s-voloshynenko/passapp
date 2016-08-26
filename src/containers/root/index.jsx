import React, { Component, PropTypes } from 'react';

export default class Root extends Component {
  propTypes: {
    children: PropTypes.element.isRequired
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
