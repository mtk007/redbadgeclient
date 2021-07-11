import React, { Component } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { Label } from 'reactstrap';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { render } from '@testing-library/react';
//import classes from '*.module.css';  //probably not what I actually need to do


type TruckData = {
    truckType: string, 
    numberAxles: number,
    engine: string, 
    fuelTankSize: number, 
    batteries: number, 
    batteryCharging: string, 
    alternator: string, 
    electrical: string, 
    electricalDisplaySwitch: string, 
    wheelType: string, 
    tires: string, 
    suspension: string, 
    shocks: string, 
    brakes: string, 
    notes: string
}


type AcceptedProps = {
    sessionToken: string | null,
}
  

export default class CreateTruck extends
Component<AcceptedProps, TruckData> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
         // addTruck: [          ]
          truckType: '',
          numberAxles: 0,
          engine: '',  
          fuelTankSize: 0,
          batteries: 0,
          batteryCharging: '',
          alternator: '',
          electrical: '',
          electricalDisplaySwitch: '',
          wheelType: '',
          tires: '',
          suspension: '',
          shocks: '',
          brakes: '',
          notes: ''    
        }
       // this.addTruck = this.addTruck.bind(this);
    }

    // addTruck(event) {
    //     event.preventDefault();
    //     this.setState({
    //             addTruck: event.target.value
    //     });
    // }
    
//get all truck
   
    handlesubmit = (e:any) => {
     e.preventDefault();
     fetch('http://firetruckbuilder.herokuapp.com/truck/truckbasics/getalltrucks', {
         method: 'GET',
         headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.token   
         })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
     })
 } 

 //get truck by ID
 //
handleGetTruckId = (e: any) => {
    e.preventDefault();
    fetch('http://firetruckbuilder.herokuapp.com/truck/truckbasics/getmytrucks/${id}', {
    method: 'GET',
    //NEED HEADERS HERE?   
    headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': localStorage.token   
         })
        }).then(
            (response) => response.json()
        ).then((data) => {
            console.log(data)
     })
}

//createtruck
//''

handleCreateTruck = (e: any) => {
    e.preventDefault();
    fetch('http://firetruckbuilder.herokuapp.com/truck/truckbasics/create', {
        method: 'POST',
        body: JSON.stringify({

            truckType: this.state.truckType, numberAxles: this.state.numberAxles, engine: this.state.engine, fuelTankSize: this.state.fuelTankSize, batteries: this.state.batteries, batteryCharging: this.state.batteryCharging, 
            alternator: this.state.alternator, electrical: this.state.electrical, electricalDisplaySwitch: this.state.electricalDisplaySwitch, 
            wheelType: this.state.wheelType, tires: this.state.tires, suspension: this.state.suspension, shocks: this.state.shocks, brakes: this.state.brakes, notes: this.state.notes}),

            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
                 })
            }).then(
                (response) => response.json()
            ).then((data) => {
                console.log(data);
      })
}

//update truck
//
handleUpdateTruck = (e: any) => { 
    e.preventDefault(); 
    console.log(this.state);
    fetch('http://firetruckbuilder.herokuapp.com/truck/truckbasics/update/${id}', {
            method: 'PUT',
            body: JSON.stringify({
                truckType: this.state.truckType, numberAxles: this.state.numberAxles, 
                engine: this.state.engine, fuelTankSize: this.state.fuelTankSize, 
                batteries: this.state.batteries, batteryCharging: this.state.batteryCharging, 
                alternator: this.state.alternator, 
                electrical: this.state.electrical, electricalDisplaySwitch: this.state.electricalDisplaySwitch, 
                wheelType: this.state.wheelType, tires: this.state.tires, suspension: this.state.suspension, 
                shocks: this.state.shocks, brakes: this.state.brakes, notes: this.state.notes}),

                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.token
                })
            }).then(
                (response) => response.json()
            ).then((data) => {
                console.log(data);
            })
        }

handleTruckModel(e: any) {this.setState({truckType: e.targetvalue})}
handleAxles(e: any) {this.setState({numberAxles: e.targetvalue})}
handleEngine(e: any) {this.setState({engine: e.targetvalue})}
handleFuelTank(e: any) {this.setState({fuelTankSize: e.targetvalue})}
handleBatteries(e: any) {this.setState({batteries: e.targetvalue})}
handleBatteryCharging(e: any) {this.setState({batteryCharging: e.targetvalue})}
handleAlternator(e: any) {this.setState({alternator: e.targetvalue})}
handleElectricalSystem(e: any) {this.setState({electrical: e.targetvalue})}
handleElectricalDisplay(e: any) {this.setState({electricalDisplaySwitch: e.targetvalue})}
handleWheels(e: any) {this.setState({wheelType: e.targetvalue})}
handleTires(e: any) {this.setState({tires: e.targetvalue})}
handleSuspension(e: any) {this.setState({suspension: e.targetvalue})}
handleShocks(e: any) {this.setState({shocks: e.targetvalue})}
handleBrakes(e: any) {this.setState({brakes: e.targetvalue})}

render() {
return (    
  <div className='main'>  
  <div className='maindiv'>
      <form>       
    <InputLabel htmlFor="truckType">
       Truck Model
    </InputLabel>                
        <Select onChange={this.handleTruckModel.bind(this)} defaultValue="select model" id="truckType">          
        <MenuItem value='Pumper'>Pumper</MenuItem>
        <MenuItem value='Tanker'>Tanker</MenuItem>
        <MenuItem value='MVP'>MVP</MenuItem>
        </Select>      
      
      
    {/*  <FormControl className={classes.formControl}>    */}     
    <InputLabel htmlFor="numberAxles">
        Axles #
    </InputLabel>   
        <Select onChange={this.handleAxles.bind(this)}     
        defaultValue="number axles" id="numberAxles">          <MenuItem value='2'>2</MenuItem> 
        <MenuItem value='2'>2</MenuItem>          
        </Select>      
   {/* </FormControl>    */} 

  {/*  <FormControl className={classes.formControl}>    */}     
    <InputLabel htmlFor="engine">
       Engine
    </InputLabel>                
        <Select onChange={this.handleEngine.bind(this)} defaultValue="select engine" id="engine">          
        <MenuItem value='L9-330'>L9-330</MenuItem>
        <MenuItem value='L9-350'>L9-350</MenuItem>
        <MenuItem value='L9-380'>L9-380</MenuItem>
        <MenuItem value='L9-400'>L9-400</MenuItem>
        <MenuItem value='L9-450'>L9-450</MenuItem>
        </Select>      
 {/*   </FormControl> */} 

 {/*   <FormControl className={classes.formControl}>    */}     
    <InputLabel htmlFor="fuelTankSize">
       Fuel Tank Size
    </InputLabel>                
        <Select onChange={this.handleFuelTank.bind(this)} defaultValue="select tank size" id="fuelTankSize">          
        <MenuItem value='50'>50 Gallons</MenuItem>
        <MenuItem value='65'>65 Gallons</MenuItem>
        <MenuItem value='100'>100 Gallons</MenuItem>
        </Select>      
  {/*  </FormControl> */} 

 {/*   <FormControl>*/} 
    <InputLabel htmlFor="engine">
       Batteries
    </InputLabel>                
        <Select onChange={this.handleBatteries.bind(this)} defaultValue="select engine" id="engine">          
        <MenuItem value='3-Array'>3-Array</MenuItem>
        <MenuItem value='6-Array'>6-Array</MenuItem>
        </Select>      
 {/*   </FormControl> */} 

  {/*  <FormControl>*/} 
    <InputLabel htmlFor="batteryCharging">
       Battery Charging
    </InputLabel>                
        <Select onChange={this.handleBatteryCharging.bind(this)} defaultValue="select battery array" id="batteryCharging">          
        <MenuItem value='standard receptacle'>Standard Receptacle</MenuItem>
        <MenuItem value='auto charge'>Auto Charge</MenuItem>   
        <MenuItem value='autocharge/pump plus'>Auto Charge/Pump Plus</MenuItem>
        </Select>   
  {/*  </FormControl>*/} 

  {/*  <FormControl>*/} 
    <InputLabel htmlFor="alternator">
       Alternator
    </InputLabel>                
        <Select onChange={this.handleAlternator.bind(this)} defaultValue="select alternator" id="alternator">          
        <MenuItem value='L/N 320'>L/N 320</MenuItem>
        <MenuItem value='Delco 320'>Delco 320</MenuItem>
        <MenuItem value='Delco 430'>Delco 430</MenuItem>
        <MenuItem value='Niehoff 360'>Niehoff 360</MenuItem>
        </Select>      
  {/*  </FormControl> */} 

  {/*  <FormControl>*/} 
    <InputLabel htmlFor="electrical">
       Electrical System
    </InputLabel>                
        <Select onChange={this.handleElectricalSystem.bind(this)} defaultValue="select electrical" id="electrical"> 
        <MenuItem value='Point to point'>Point-to-Point</MenuItem>
        <MenuItem value='Akron VMUX'>Akron VMUX</MenuItem>
       </Select>
  {/*  </FormControl>*/} 


  {/*  <FormControl>*/} 
    <InputLabel htmlFor="electricalDisplaySwitch">
       Electrical Display
    </InputLabel>                
        <Select onChange={this.handleElectricalDisplay.bind(this)} defaultValue="select electrical display" id="electricalDisplaySwitch"> 
        <MenuItem value='Standard Switches'>Standard Switches</MenuItem>
        <MenuItem value='Vista Display'>Vista Display</MenuItem>
        <MenuItem value='Vista Displays (2)'>Vista Displays x2</MenuItem>
       </Select>
   {/* </FormControl>*/} 


   {/*  <FormControl>*/} 
    <InputLabel htmlFor="wheelType">
       Wheels
    </InputLabel>                
        <Select onChange={this.handleWheels.bind(this)} defaultValue="select wheels" id="wheelType"> 
        <MenuItem value='Painted Steel'>Painted Steel</MenuItem>
        <MenuItem value='Aluminum'>Aluminum</MenuItem>
       </Select>
  {/*  </FormControl>*/} 


  {/*  <FormControl>*/} 
    <InputLabel htmlFor="tires">
       Tires
    </InputLabel>                
        <Select onChange={this.handleTires.bind(this)} defaultValue="select tires" id="tires"> 
        <MenuItem value='Goodyear'>Goodyear</MenuItem>
        <MenuItem value='Michelin'>Michelin</MenuItem>
       </Select>
  {/*  </FormControl>*/} 


  {/*  <FormControl>*/} 
    <InputLabel htmlFor="suspension">
       Suspension
    </InputLabel>                
        <Select onChange={this.handleSuspension.bind(this)} defaultValue="select suspension" id="suspension"> 
        <MenuItem value='spring'>Spring-based</MenuItem>
        <MenuItem value='air ride'>Air Ride</MenuItem>
       </Select>
  {/*  </FormControl>*/} 

  {/*  <FormControl>*/} 
    <InputLabel htmlFor="shocks">
       Shocks
    </InputLabel>                
        <Select onChange={this.handleShocks.bind(this)} defaultValue="select shocks" id="shocks"> 
        <MenuItem value='0'>0</MenuItem>
        <MenuItem value='2'>2</MenuItem>
       </Select>
  {/*  </FormControl>*/} 

  {/*  <FormControl>*/} 
    <InputLabel htmlFor="brakes">
       Brakes
    </InputLabel>                
        <Select onChange={this.handleBrakes.bind(this)} defaultValue="select brakes" id="brakes"> 
        <MenuItem value='disc'>Disc</MenuItem>
        <MenuItem value='"S" Cam'>"S" Cam</MenuItem>
       </Select>
  {/*  </FormControl>*/} 

    <button onClick={this.handleCreateTruck}>Create Truck</button>
</form>
   
</div>  
</div>
)}
}
