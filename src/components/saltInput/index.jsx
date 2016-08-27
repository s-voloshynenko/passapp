import React, { Component } from 'react';

export default class SaltInput extends Component {
  showSalt (e) {
    document.getElementById('salt-pass').type = e.target.checked ? 'text' : 'password';
  }

  submitSalt (e) {
    
  }

  render () {
    return (
      <div className="component-salt">

        <input className="input-default" id="salt-pass" placeholder="Enter your salt" type="password" name="salt" />
        <button className="btn btn-submit" onClick={this.submitSalt.bind(this)} type="button">
          Submit
          <i className="fa fa-arrow-right"/>
        </button>
     
        <br />
      
        <div className="showpass-container">
          <input id="check1" type="checkbox" name="option" onChange={this.showSalt.bind(this)} />
          <label htmlFor="check1">
            <span className="fa-stack">
              <i className="fa fa-square-o fa-stack-1x"></i>
              <i className="fa fa-check fa-stack-1x"></i>
            </span>
            show salt
          </label>
        </div>
      
      </div>
    );
  }
}
