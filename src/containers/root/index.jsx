import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Home from '../home/index.jsx';
import * as Actions from '../../actions'

class Root extends Component {
  render () {
    const { view, salt, actions } = this.props;
    console.log(view, salt, actions)
    return (
      <div id="root-container">
        {view === 'home' &&
          <Home actions={{ submitSalt: actions.submitSalt }} salt={salt} />
        }
      </div>
    );
  }
}

Root.propTypes = {
  view: PropTypes.string.isRequired,
  salt: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state) {
  return {
    view: state.salt.view,
    salt: state.salt.salt
  };
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
