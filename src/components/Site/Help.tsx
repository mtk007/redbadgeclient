import React, { Component } from 'react';


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