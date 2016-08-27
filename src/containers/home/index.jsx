import React, { Component } from 'react';
import SaltInput from '../../components/saltInput/index.jsx';

export default class Home extends Component {
  constructor (props) {
    super(props);

    this.state = {
      salt: this.props.salt,
      actions: this.props.actions
    };
  }

  render() {
    return (
      <div id="home-container">
        <div className="row">
          <div className="salt-input-container">
            <SaltInput submitSalt={this.state.actions.submitSalt} />
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  salt: React.PropTypes.string,
  actions: React.PropTypes.object
}
