import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import './Logout.css'
import {Typography} from '@material-ui/system';

export default function Logout(props) {

  return (
     <>
     <div className='logout'>
       <Button id='logout'
       onClick={props.clearSession}

        className='logOut'>Log Out</Button>   
    </>

    );
  }
  


export default Logout;
