import React, { Component } from 'react';
import { render } from "@testing-library/react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
 

  type AcceptedProps = {
    updateToken: (newToken: string) => void,
    sessionToken: string
}  
const FinalizeOrder: React.FunctionComponent<AcceptedProps> = (props) => {
  return(
      <>
      </>
  );
}
export default FinalizeOrder;