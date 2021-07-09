import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { render } from '@testing-library/react';


type AcceptedProps = {
    sessionToken: string | null,
}
  
export default class createTruckTable extends

render() {
return (    
  <div>      
    <FormControl className={classes.formControl}>        
    <InputLabel htmlFor="truckType">
       Truck Model
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select model" id="truckType">          
        <MenuItem value='Pumper'>Pumper</MenuItem>
        <MenuItem value='Tanker'>Tanker</MenuItem>
        <MenuItem value='MVP'>MVP</MenuItem>
        </Select>      
    </FormControl>      
      
    <FormControl className={classes.formControl}>        
    <InputLabel htmlFor="numberAxles">
        Axles #
    </InputLabel>   
        <Select onChange={this.handlefeaturesTruck.bind(this)}     
        defaultValue="number axles" id="numberAxles">          <MenuItem value='2'>2</MenuItem> 
        <MenuItem value='3'>2</MenuItem>          
        </Select>      
    </FormControl>    

    <FormControl className={classes.formControl}>        
    <InputLabel htmlFor="engine">
       Engine
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select engine" id="engine">          
        <MenuItem value='L9-330'>L9-330</MenuItem>
        <MenuItem value='L9-350'>L9-350</MenuItem>
        <MenuItem value='L9-380'>L9-380</MenuItem>
        <MenuItem value='L9-400'>L9-400</MenuItem>
        <MenuItem value='L9-450'>L9-450</MenuItem>
        </Select>      
    </FormControl> 

    <FormControl className={classes.formControl}>        
    <InputLabel htmlFor="fuelTankSize">
       Fuel Tank Size
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select tank size" id="fuelTankSize">          
        <MenuItem value='50'>50 Gallons</MenuItem>
        <MenuItem value='65'>65 Gallons</MenuItem>
        <MenuItem value='100'>100 Gallons</MenuItem>
        </Select>      
    </FormControl> 

    <FormControl>
    <InputLabel htmlFor="engine">
       Batteries
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select engine" id="engine">          
        <MenuItem value='3-Array'>3-Array</MenuItem>
        <MenuItem value='6-Array'>6-Array</MenuItem>
        </Select>      
    </FormControl> 

    <FormControl>
    <InputLabel htmlFor="batteryCharging">
       Battery Charging
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select battery array" id="batteryCharging">          
        <MenuItem value='standard receptacle'>Standard Receptacle</MenuItem>
        <MenuItem value='auto charge'>Auto Charge</MenuItem>   
        <MenuItem value='autocharge/pump plus'>Auto Charge/Pump Plus</MenuItem>
        </Select>   
    </FormControl>

    <FormControl>
    <InputLabel htmlFor="alternator">
       Alternator
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select alternator" id="alternator">          
        <MenuItem value='L/N 320'>L/N 320</MenuItem>
        <MenuItem value='Delco 320'>Delco 320</MenuItem>
        <MenuItem value='Delco 430'>Delco 430</MenuItem>
        <MenuItem value='Niehoff 360'>Niehoff 360</MenuItem>
        </Select>      
    </FormControl> 

    <FormControl>
    <InputLabel htmlFor="electrical">
       Electrical System
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select electrical" id="electrical"> 

       </Select>
    </FormControl>


    <FormControl>
    <InputLabel htmlFor="electricalDisplaySwitch">
       Electrical Display
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select electrical display" id="electricalDisplaySwitch"> 

       </Select>
    </FormControl>


    <FormControl>
    <InputLabel htmlFor="wheelType">
       Wheels
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select wheels" id="wheelType"> 

       </Select>
    </FormControl>


    <FormControl>
    <InputLabel htmlFor="tires">
       Tires
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select tires" id="tires"> 

       </Select>
    </FormControl>


    <FormControl>
    <InputLabel htmlFor="suspension">
       Suspension
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select suspension" id="suspension"> 

       </Select>
    </FormControl>


    <FormControl>
    <InputLabel htmlFor="shocks">
       Shocks
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select shocks" id="shocks"> 

       </Select>
    </FormControl>


    <FormControl>
    <InputLabel htmlFor="brakes">
       Brakes
    </InputLabel>                
        <Select onChange={this.handlefeaturesTruck.bind(this)} defaultValue="select brakes" id="brakes"> 

       </Select>
    </FormControl>


</div>  )}


export default function GroupedSelect() {  const classes = useStyles()};