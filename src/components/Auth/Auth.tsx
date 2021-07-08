 import React from 'react';
 import './Auth.css';
import Login from './Login';
 import Register from './Register';

type AcceptedProps = {
updateToken: (newToken: string) => void
}
     
const Auth: React.FunctionComponent<AcceptedProps> = (props) => {

return(
       <div className='auth'>
        <h1>Mid-America Fire & Safety Fire Truck Builder</h1>
    <Login updateToken={props.updateToken}/>
        <Register updateToken={props.updateToken}/>
        </div>
     ) 
     }


export default Auth;
