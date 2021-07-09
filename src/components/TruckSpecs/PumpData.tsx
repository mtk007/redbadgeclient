import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { render } from '@testing-library/react';

const useStyles = makeStyles((theme: Theme) => createStyles({    formControl: {margin: theme.spacing(1), minWidth: 120,},  }),);

handleCreate = (event: any) =>
        fetch('http://localhost:911/pump/create', {
            method: 'POST',
            body: JSON.stringify({pumpModel: pumpModel, primer: primer, pumpShift: pumpShift, anodeMonitor: anodeMonitor, thermalRV: thermalRV, frontSuctionMethod: frontSuctionMethod, frontSuctionValve: frontSuctionValve, swivel: swivel, rearSuctionMethod: rearSuctionMethod, rearSuctionValve: rearSuctionValve, interfaceCover: interfaceCover, interfaceControls: interfaceControls, tankFill: tankFill, boosterHose: boosterHose, truckId: truckId} ), 
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
        })
        create 
        headers
        resp

render()
const { pumpData } = this.state
return (    
    <div className='pumpData'>
    <div className='pumpDiv'>    
{ pumpData.map(pumpData => )


      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="pumpModel">
         Pump Model
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select model" id="pumpModel">          
          <MenuItem value='Hale QFLO'>Hale QFLO</MenuItem>
          </Select>      
      </FormControl>      

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="primer">
         Primer
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select pump primer" id="primer">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl>  

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="pumpShift">
         Pump Shift 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select pump shift" id="pumpShift">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl> 
///////////////////////////

<FormControl className={classes.formControl}>        
      <InputLabel htmlFor="anodeMonitor">
         Anode Monitor 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select anodeMonitor" id="anodeMonitor">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl> 


      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="thermalRV">
         Thermal RV 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select thermal RV" id="thermalRV">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl> 

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="frontSuctionMethod">
         Front Pump Suction Method 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select front Suction Method" id="frontSuctionMethod">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl> 

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="frontSuctionValve">
         Front Pump Suction Valve 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select front Suction Valve" id="frontSuctionValve">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl>

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="swivel">
         Swivel 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="need swivel?" id="frontSuctionValve">          
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
          </Select>      
      </FormControl>

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="rearSuctionMethod">
         Rear Pump Suction Method 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select rear Suction Method" id="rearSuctionMethod">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl>

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="rearSuctionValve">
         Rear Pump Suction Valve 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select rear Suction Valve" id="rearSuctionValve">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl>

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="interfaceCover">
         Interface Cover 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select interface cover" id="interfaceCover">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl>

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="interfaceControls">
         Interface Controls 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select interface controls" id="interfaceControls">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl>

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="tankFill">
         Tank Filling
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select tank filling" id="tankFill">          
          <MenuItem value='standard'>Standard</MenuItem>
          </Select>      
      </FormControl>

      <FormControl className={classes.formControl}>        
      <InputLabel htmlFor="boosterHose">
         Booster Hose 
      </InputLabel>                
          <Select onChange={this.handlefeaturesPump.bind(this)} defaultValue="select booster hose?" id="boosterHose">          
          <MenuItem value='0'>None</MenuItem>
          <MenuItem value='1'>One</MenuItem>
          </Select>      
      </FormControl>
</div></div>


});

