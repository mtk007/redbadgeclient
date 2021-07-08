import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Site/Nav'
import { isPropertySignature } from 'typescript';
import Footer from './components/Site/footer';
import featuresPump from './components/'
import Header from './components/Site/header';
//don't forget the major components here

// type Props = {}
// type: AppState = {
//   sessionToken: string | null,
// }

type AcceptedProps={
  
}


type Arrays = {
  
}

class App extends Component <AcceptedProps, AppState>{
  constructor(props:AcceptedProps){
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
  this.setState({
    sessionToken: ''
  })
}

render(){
  return ( 
    <div className="App">
    <Header />
    {/* pass clear token function via props into Navbar*/ }
    <Navbar />
    {}
    <Footer />
    </div>
  )
}
}

export default App;