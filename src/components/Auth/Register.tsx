import React, {Component} from 'react';
import { Form, Button, Input } from 'reactstrap';
import APIURL from '../Site/environment';

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
    handleRegister = (event:any) => {
    event.preventDefault();
    fetch(`${APIURL}/user/register`, {
        method: 'POST',
        body: JSON.stringify({user:{email: this.state.email, password: this.state.password}}),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(
        (response) => response.json()
     )
    .then((data) => {
        this.props.updateToken(data.sessionToken)
    
        console.log(data);
    })
   .catch(
       (err) => {
           console.log(err)
       }
   )
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

        //EMAIL VALIDATION
    // const [validEmail, setValidEmail] = useState(true);

    //     const ValidateEmail = (val) => {
    
    //        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(val)){
            
    //         setValidEmail(true)
    //      } else{
    //          setValidEmail(false)    
    // }

render(){
return(

  <div className='main'>
<div className='mainDiv'>
    <form onSubmit={this.handleRegister}>
        <h2>Register</h2>
        <Input placeholder='Email' type="text" onChange={(e) => this.setState({...this.state, email: e.target.value})} />
        <Input placeholder='Password' type="text" onChange={(e) => this.setState({...this.state, password: e.target.value})} />
        <Button type='submit'>Register</Button>

    </form>
</div>
</div>
)}

}
