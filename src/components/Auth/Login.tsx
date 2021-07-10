
import React, {Component} from 'react';
import { Form, Button, Input } from 'reactstrap';
//create here or import input interface from components folder
//import material UI buttons

 type UserData = {
    email: string,
    password: string,
    role: string,   //might be enum
}

type AcceptedProps = {
    updateToken: (newToken: string) => void
}

export default class Login extends Component <AcceptedProps, UserData>
{
        constructor(props: AcceptedProps){
            super(props)
            this.state={
                email: '',
                password: '',
                role: '',
            }
        }
//need to put in heroku fetch at some point when ready to do so
    handleSubmit = (event:any) => {
     event.preventDefault();
     fetch('http://localhost:911/user/login', {
         method: 'POST',
         body: JSON.stringify({user:{email: this.state.email, password: this.state.password, role: this.state.role}}),
         headers: new Headers({
             'Content-Type': 'application/json'
         })
    }).then(
         (response) => response.json()
     ).then((data) => {
         this.props.updateToken(data.sessionToken);
     }) 
}

handleEmailInput(event:any) {
    this.setState({
        email: event.target.value
    })
}

handlePasswordInput(event:any) {
    this.setState({
        password: event.target.value
    })
}

 render(){
     return(
    <>
    <form>
        {/* <div className='login'>
        <h1>Login</h1>
        <label htmlFor="email">Email:</label>
        <br/>
        <input type="text" 
        id='loginemail' 
        value={email} 
        onChange={(event) => setEmail(event.target.value)} />
        <br/>
        <label htmlFor="password">Password:</label>
        <br/>
        <input type="password" 
        id='loginpassword' 
        value={password} 
        onChange={(event) => setPassword(event.target.value)} />
        <br/>
        <button type="submit" onClick={handleSubmit}>Submit</button>         
         </div> */}
    </form>
</>
  ) }}
    




