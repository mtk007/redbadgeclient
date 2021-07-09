import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";


type AcceptedProps = {clearToken: ()=>
  void
}

const Logout: React.FunctionComponent<AcceptedProps> = (props) => {

    return (
      <div> <button onClick = {props.clearToken} >
        
          </button>
          </div>
    );
}

export default Logout;