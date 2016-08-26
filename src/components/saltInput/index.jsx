import React, { Component } from 'react';

export default class SaltInput extends Component {
  render() {
    return (
      <div className="component-salt">
        <input className="input-default" placeholder="Enter your salt" type="password" name="salt" />
        <button className="btn btn-submit" type="button">
          Submit
          <i className="fa fa-arrow-right"/>
        </button>
      </div>
    );
  }
}
