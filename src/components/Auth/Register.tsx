// //FROM WORKOUT LOG - ACTUALLY WORKS
import React, {Component} from 'react';

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

    handleSubmit = (event:any) => {
    event.preventDefault();
    fetch("http://localhost:911/user/register", {
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
    {/* label: string;
    formFeedBack: string;
    formText: string;
    onChange: {} />
       <h1>Register</h1>
      <Input placeholder="Email" type="text" onChange={this.handleEmailInput.bind(this)} />
      <Input placeholder="Password" type="text" onChange={this.handlePasswordInput.bind(this)} />
      <Button onClick={this.handleSubmit}>Register</Button>
    </RegisterField> */}

    </>
)}

}
