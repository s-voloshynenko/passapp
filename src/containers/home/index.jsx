import React, { Component } from 'react';
import SaltInput from '../../components/saltInput';

export default class Home extends Component {
  render() {
    return (
      <div id="home-container">
        <div className="row">
          <div className="salt-input-container">
            <SaltInput />
          </div>
        </div>
      </div>
    );
  }
}
