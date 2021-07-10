import React, { Component } from 'react';
import { Route, Link, Switch} from 'react-router-dom';


type AcceptedProps = {
    updateToken: (newToken: string) => void,
    sessionToken: string | null
}

const Help: React.FunctionComponent<AcceptedProps> = (props) => {
    return(
        <>
        </>
    );
}

export default Help;