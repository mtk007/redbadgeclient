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
        
        //http://localhost:911/user/login
            handleSubmit = (event:any) => {
     event.preventDefault();
     fetch('http://firetruckbuilder.herokuapp.com/user/login', {
         method: 'POST',
         body: JSON.stringify({user:{email: this.state.email, password: this.state.password}}),
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
    <div className='main'>
                <div className='mainDiv'>
                    <Form>
                        <h2>Login</h2>
                        <Input placeholder='Email' type="text" onChange={this.handleEmailInput.bind(this)} />
                        <Input placeholder='Password' type="text" onChange={this.handlePasswordInput.bind(this)} />
                        <Button onClick={this.handleSubmit.bind(this)}>Login</Button>
                    </Form>
                </div>
            </div>
    </form>
</>
  ) }}
    




