import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import * as authActionCreators from "../actions/auth";

class Logout extends Component {
  
  render() {
    return (
      <button onClick = {/* clear token function prop */ } >
        
          </button>

    );
  }

}

export default connect()(Logout);