import React, { Component } from 'react';
import { render } from "@testing-library/react"

 

  type AcceptedProps = {
    updateToken: (newToken: string) => void,
    sessionToken: string | null
}  
const FinalizeOrder: React.FunctionComponent<AcceptedProps> = (props) => {
  return(
      <>
      </>
  );
}
export default FinalizeOrder;