import React, { Component } from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import { Label, Input } from 'reactstrap';
import { Form } from 'reactstrap';
import APIURL from '../Site/environment';
import Select from "@material-ui/core/Select";
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';


type DeleteUser = {
    id: number,
    userId: number 
}

type AcceptedProps = {  sessionToken: string | null,}

export default class ChiefOffice extends Component<AcceptedProps, DeleteUser> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            id: 0,
            userId: 0    
        }         
    }
      
    handleDelete = (id: number) => {

        fetch(`${APIURL}/user/delete/admin/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                id: data,
            })

        })
    }

    handleDeletePost = (userId: number) => {

        fetch(`${APIURL}/user/delete/${userId}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
            this.setState({
                userId: data,
            })

        })
    }

    render() {
        if (localStorage.getItem('role') == 'admin'){
        return(
            <div className='main'>
                <div className='mainDiv'>
                    {/* <Form>
                        <Label>User's ID</Label>
                        <Input onChange={(e) => this.setState({id: parseInt(e.target.value)})} />
                        <br/>
                        <Button  variant="contained" color="secondary" white-space="normal" word-wrap="break-word" startIcon={<DeleteIcon />} onClick={(e) => this.handleDelete(this.state.id)}>Welcome to the Fire Truck Builder!</Button>
                        <br />
                        <br />
                        <Label>User ID</Label>
                        <Input onChange={(e) => this.setState({userId: parseInt(e.target.value)})}/>
                        <br />
                        <Button onClick={(e) => this.handleDeletePost(this.state.userId)}>Delete A User</Button>
                    </Form> */}
                </div>
            </div>
        )
    } else {
        return(
            <div>   
                <h3>Proceed with Caution.</h3>
    
                <h3>Delete a user and all their orders</h3>
                <Form>
                        <Label>User's ID</Label>
                        <Input onChange={(e) => this.setState({id: parseInt(e.target.value)})} />
                        <br/>
                        <Button  variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={(e) => this.handleDelete(this.state.id)}>Delete User and All Truck Orders</Button>
                        <br />
                        <br />
                        <Label>User ID</Label>
                        <Input onChange={(e) => this.setState({userId: parseInt(e.target.value)})}/>
                        <br />
                        <Button onClick={(e) => this.handleDeletePost(this.state.userId)}>Delete User</Button>
                    </Form>

                    <h3>Delete a user (but not their specifications history)</h3>
                    <Form>
                        <Label>User's ID</Label>
                        <Input onChange={(e) => this.setState({id: parseInt(e.target.value)})} />
                        <br/>
                        <Button  variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={(e) => this.handleDelete(this.state.id)}>Delete User and All Truck Orders</Button>
                        <br />
                        <br />
                        <Label>User ID</Label>
                        <Input onChange={(e) => this.setState({userId: parseInt(e.target.value)})}/>
                        <br />
                        <Button onClick={(e) => this.handleDeletePost(this.state.userId)}>Delete A User</Button>
                    </Form>
            </div>
        )
    }
    }


    

}