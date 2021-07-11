import React, { Component } from 'react';
import './App.css';
import { isPropertySignature } from 'typescript';
import Footer from './components/Site/footer';
import Auth from './components/Auth/Auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Site/header';
import Navbar from './components/Site/Nav';
import { render } from 'react-dom';
import APIURL from './components/Site/environment';

//import Admin from './components/Site/ChiefOfficeAdmin';

//don't forget to import the major components here

type Props = {}
type AppState = {
 sessionToken: string | null,
 }

class App extends Component <Props, AppState>{
  constructor(props: Props){
      super(props);
      this.state = {
        sessionToken:('')
      }
    this.updateToken = this.updateToken.bind(this)
    this.clearToken = this.clearToken.bind(this)
  }

componentDidMount(){
  if (localStorage.getItem('token')){
    this.setState({
      sessionToken: localStorage.getItem('token')
    })
  }
}

updateToken(newToken: string){
  localStorage.setItem('token', newToken);
  this.setState({
    sessionToken: newToken
  }, () => console.log(this.state.sessionToken))
}

//pass clearToken through Navbar AND the actual button (onclick) when it's ready.
clearToken(){
  localStorage.clear();
  //this.setState({
    //sessionToken: ''
  }

//  Admin
// showAdmin(){
//   render() => {
//   return(
//     <div>


//     </div>
//   )
// }}


render(){
  return ( 
    <div className="App">
    <Header />
    <Router>
   <Navbar updateToken={this.updateToken} sessionToken={this.state.sessionToken} clearToken={this.clearToken}/>
   </Router>
    {/* pass clear token function via props into Navbar*/ }
   {/* <Navbar clearToken = {this.clearToken}/>*/}
    
    <Footer />
    </div>
  );
}
}

export default App;