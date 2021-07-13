import React, {Component} from 'react';
import { render } from 'react-dom';
import { Form, Button, Input } from 'reactstrap';
import APIURL from '../Site/environment';

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
            this.handleSubmit = this.handleSubmit.bind(this);

        }

        //http://localhost:911/user/login
            handleSubmit = (event:any) => {
     event.preventDefault();
     console.log('hitting now')
     console.log(this.state.email, this.state.password)
     fetch(`https://firetruckbuilder.herokuapp.com/user/login/`, {
         method: 'POST',
         body: JSON.stringify({user:{email: this.state.email, password: this.state.password}}),
         headers: new Headers({
             'Content-Type': 'application/json'
         })
    }).then(
         (response) => response.json()
     ).then((data) => {
         this.props.updateToken(data.sessionToken);
         localStorage.setItem('role', data.user.role)
     }).catch(err => console.log(err)) 
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
    <div className='main'>
                <div className='mainDiv'>
                    <form onSubmit={this.handleSubmit}>
                        <h2>Login</h2>
                        <Input placeholder='Email' type="text" onChange={(e) => this.setState({...this.state, email: e.target.value})} />
                        <Input placeholder='Password' type="text" onChange={(e) => this.setState({...this.state, password: e.target.value})} />
                        <Button type='submit'>Login</Button>

                    </form>
                </div>
            </div>
</>
  )
}

}
    




