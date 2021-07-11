import React, {Component} from 'react';
import { Form, Button, Input } from 'reactstrap';

//import material UI buttons

type RegisterState = {
    email: string,
    password: string,
    role: string,   //might be enum
}

type AcceptedProps = {
    updateToken: (newToken: string) => void
}


export default class Register extends Component<AcceptedProps, RegisterState>{
        constructor(props: AcceptedProps){
            super(props)
            this.state={
                email: '',
                password: '',
                role: 'user',
            }
        }
        //http://localhost:911/user/register
    handleSubmit = (event:any) => {
    event.preventDefault();
    fetch('http://firetruckbuilder.herokuapp.com/user/register', {
        method: 'POST',
        body: JSON.stringify({user:{email: this.state.email, password: this.state.password, role: this.state.role}}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(
        (response) => response.json()
     )
    .then((data) => {
        //this.props.updateToken(data.sessionToken)
    
        console.log(data);
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
   <div className='main'>
                <div className='mainDiv'>
                    <Form>
                        <h2>Register</h2>
                        <Input placeholder='Email' type="text" onChange={this.handleEmailInput.bind(this)} />
                        <Input placeholder='Password' type="text" onChange={this.handlePasswordInput.bind(this)} />
                        <Button onClick={this.handleSubmit}>Sign Up</Button>
                    </Form>
                </div>
            </div>

    </>
)}

}
