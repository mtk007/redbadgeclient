import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import { createStyles, makeStyles, Theme,} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { render } from '@testing-library/react';
import APIURL from '../Site/environment';
//import classes from '*.module.css'; //probably not what I actually need to do

type PumpData = {
    pumpModel: string,
    primer: string,
    pumpShift: string,
    anodeMonitor: string,
    thermalRV: string,
    frontSuctionMethod: string,
    frontSuctionValve: string,
    swivel: string,
    rearSuctionMethod: string,
    rearSuctionValve: string,
    interfaceCover: string,
    interfaceControls: string,
    tankFill: string,
    boosterHose: number,
    truckId: number
}

type AcceptedProps= {
    sessionToken: string | null,
    
}

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//         display: 'flex',
//         flexGrow: 1,
 
//     },

//     formControl: {
//       margin: theme.spacing(5),
//       minWidth: 150,
//      padding: theme.spacing(2)
//     },
//     selectEmpty: {
//       marginTop: theme.spacing(2),
//     },
//   })
// );


export default class CreatePump extends Component<AcceptedProps, PumpData> {
    constructor(props: AcceptedProps) {
        super(props)
        this.state = {
            pumpModel: '',
            primer: '',
            pumpShift: '',
            anodeMonitor: '',
            thermalRV: '',
            frontSuctionMethod: '',
            frontSuctionValve: '',
            swivel: '',
            rearSuctionMethod: '',
            rearSuctionValve: '',
            interfaceCover: '',
            interfaceControls: '',
            tankFill: '',
            boosterHose: 0,
            truckId: 0
    };
    this.handleCreatePump.bind(this)
    this.handleUpdatePump.bind(this)
}

//get all pump
handlesubmit = (e:any) => {
e.preventDefault();
    fetch(`${APIURL}/pumpfeatures/getpumpfeatures`, {
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

 //create pump
handleCreatePump = (e: any) => { 
    console.log(localStorage.token, 'props', this.props.sessionToken)
    e.preventDefault(); 
    fetch(`${APIURL}/pumpfeatures/create`, {
            method: 'POST',

            body: JSON.stringify({pumpModel: this.state.pumpModel, primer: this.state.primer, pumpShift: this.state.pumpShift, anodeMonitor: this.state.anodeMonitor, thermalRV: this.state.thermalRV, frontSuctionMethod: this.state.frontSuctionMethod, frontSuctionValve: this.state.frontSuctionValve, swivel: this.state.swivel, rearSuctionMethod: this.state.rearSuctionMethod, rearSuctionValve: this.state.rearSuctionValve, interfaceCover: this.state.interfaceCover, interfaceControls: this.state.interfaceControls, tankFill: this.state.tankFill, boosterHose: this.state.boosterHose, truckId: this.state.truckId}), 

            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.token
                     }),
                }).then(
                    (response) => response.json()
                ).then((data) => {
                    console.log(data);
            })
    };

//update pump
    handleUpdatePump = (id: number) => { 
        console.log(this.state);
        fetch(`${APIURL}/pumpfeatures/update/${id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    pumpModel: this.state.pumpModel, primer: this.state.primer, pumpShift: this.state.pumpShift, anodeMonitor: this.state.anodeMonitor, 
                    thermalRV: this.state.thermalRV, frontSuctionMethod: this.state.frontSuctionMethod, frontSuctionValve: this.state.frontSuctionValve, 
                    swivel: this.state.swivel, rearSuctionMethod: this.state.rearSuctionMethod, rearSuctionValve: this.state.rearSuctionValve, 
                    interfaceCover: this.state.interfaceCover, interfaceControls: this.state.interfaceControls, tankFill: this.state.tankFill, 
                    boosterHose: this.state.boosterHose, truckId: this.state.truckId}), 
    
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


handlePumpModel(e: any) {this.setState({pumpModel: e.target.value})}
handlePumpPrimer(e: any) {this.setState({primer: e.target.value})}
handlePumpShift(e: any) {this.setState({pumpShift: e.target.value})}
handleAnodeMonitor(e: any) {this.setState({anodeMonitor: e.target.value})}
handleThermalRV(e: any) {this.setState({thermalRV: e.target.value})}
handleFrontSuction(e: any) {this.setState({frontSuctionMethod: e.target.value})}
handleFrontSuctionValve(e: any) {this.setState({frontSuctionValve: e.target.value})}
handleSwivel(e: any) {this.setState({swivel: e.target.value})}
handleRearSuction(e: any) {this.setState({rearSuctionMethod: e.target.value})}
handleRearSuctionValve(e: any) {this.setState({rearSuctionValve: e.target.value})}
handleInterfaceCover(e: any) {this.setState({interfaceCover: e.target.value})}
handlefInterfaceControls(e: any) {this.setState({interfaceControls: e.target.value})}
handleTankFilling(e: any) {this.setState({tankFill: e.target.value})}
handleBoosterHose(e: any) {this.setState({boosterHose: parseInt(e.target.value)})}


render(){
return (    
 //   <div className={classes.divControl}>
 <div className='main'>  
 <div className='maindiv'>   
<form>
     <FormControl>      
    {/* <FormControl className={classes.formControl}> */}
      <InputLabel htmlFor="pumpModel">
         Pump Model
      </InputLabel>                
          <Select onChange={this.handlePumpModel.bind(this)} defaultValue="select model" id="pumpModel">          
          <MenuItem value='Hale QFLO'>Hale QFLO</MenuItem>
          <MenuItem value='Hale QMAX 1250-2000'>Hale QMAX 1250-2000</MenuItem>
          <MenuItem value='Hale QMAX 2250'>Hale QMAX 2250</MenuItem>
          <MenuItem value='Hale RSD'>Hale RSD</MenuItem>
          <MenuItem value='Hale AP PTO'>Hale AP PTO</MenuItem>
          <MenuItem value='Waterous CSU'>Waterous CSU</MenuItem>
          <MenuItem value='Waterous CM'>Waterous CM</MenuItem>
          <MenuItem value='Waterous CMU'>Waterous CMU</MenuItem>
          <MenuItem value='Darley'>Darley</MenuItem>
          </Select>      
     </FormControl>     

      <FormControl>        
      <InputLabel htmlFor="primer">
         Primer
      </InputLabel>                
          <Select onChange={this.handlePumpPrimer.bind(this)} defaultValue="select pump primer" id="primer">          
          <MenuItem value='standard'>Standard</MenuItem>
          <MenuItem value='Air - Manual'>Air - Manual</MenuItem>
          <MenuItem value='Air - Auto'>Air - Auto</MenuItem>
          </Select>      
    </FormControl>  

      <FormControl >        
      <InputLabel htmlFor="pumpShift">
         Pump Shift 
      </InputLabel>                
          <Select onChange={this.handlePumpShift.bind(this)} defaultValue="select pump shift" id="pumpShift">          
          <MenuItem value='Standard'>Standard</MenuItem>
          <MenuItem value='Standard w/Override'>Standard w/Override</MenuItem>
          </Select>      
      </FormControl> 

    <FormControl>        
      <InputLabel htmlFor="anodeMonitor">
         Anode Monitor 
      </InputLabel>                
          <Select onChange={this.handleAnodeMonitor.bind(this)} defaultValue="select anodeMonitor" id="anodeMonitor">          
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
          </Select>      
      </FormControl> 

      <FormControl >        
      <InputLabel htmlFor="thermalRV">
         Thermal RV 
      </InputLabel>                
          <Select onChange={this.handleThermalRV.bind(this)} defaultValue="select thermal RV" id="thermalRV">          
          <MenuItem value='No'>No</MenuItem>
          <MenuItem value='Standard'>Standard</MenuItem>
          <MenuItem value='Standard TRV'>Standard TRV</MenuItem>
          <MenuItem value='TRV w/light'>TRV w/Light</MenuItem>
          <MenuItem value='TRV w/light & alarm'>TRV w/Light & Alarm</MenuItem>
          </Select>      
      </FormControl> 

      <FormControl >        
      <InputLabel htmlFor="frontSuctionMethod">
         Front Pump Suction Method 
      </InputLabel>                
          <Select onChange={this.handleFrontSuction.bind(this)} defaultValue="select front Suction Method" id="frontSuctionMethod">          
          <MenuItem value='manual valve'>Manual Valve</MenuItem>
          <MenuItem value='electric valve'>Electric Valve</MenuItem>
          <MenuItem value='air valve'>Air Valve</MenuItem>
          </Select>      
      </FormControl> 

      <FormControl >        
      <InputLabel htmlFor="frontSuctionValve">
         Front Pump Suction Valve 
      </InputLabel>                
          <Select onChange={this.handleFrontSuctionValve.bind(this)} defaultValue="select front Suction Valve" id="frontSuctionValve">          
          <MenuItem value='No'>No</MenuItem>
          <MenuItem value='4" No Valve'>4" - No Valve</MenuItem>
          <MenuItem value='4" w/Air Valve'>4" - Air Valve</MenuItem>
          <MenuItem value='4" w/Electric Valve'>4" - Electric Valve</MenuItem>
          <MenuItem value='5" No Valve'>5" - No Valve</MenuItem>
          <MenuItem value='5" w/Air Valve'>5" - Air Valve</MenuItem>
          <MenuItem value='5" w/Electric Valve'>5" - Electric Valve</MenuItem>
          </Select>      
      </FormControl> 
<br />
      <FormControl>        
      <InputLabel htmlFor="swivel">
         Swivel 
      </InputLabel>                
          <Select onChange={this.handleSwivel.bind(this)} defaultValue="need swivel?" id="frontSuctionValve">          
          <MenuItem value='Yes'>Yes</MenuItem>
          <MenuItem value='No'>No</MenuItem>
          </Select>      
      </FormControl> 

      <FormControl >        
      <InputLabel htmlFor="rearSuctionMethod">
         Rear Pump Suction Method 
      </InputLabel>                
          <Select onChange={this.handleRearSuction.bind(this)} defaultValue="select rear Suction Method" id="rearSuctionMethod">          
          <MenuItem value='manual valve'>Manual Valve</MenuItem>
          <MenuItem value='electric valve'>Electric Valve</MenuItem>
          <MenuItem value='air valve'>Air Valve</MenuItem>
          </Select>      
      </FormControl> 

      <FormControl >        
      <InputLabel htmlFor="rearSuctionValve">
         Rear Pump Suction Valve 
      </InputLabel>                
          <Select onChange={this.handleRearSuctionValve.bind(this)} defaultValue="select rear Suction Valve" id="rearSuctionValve">          
          <MenuItem value='2-1/2" Manual Valve'>2-1/2" Manual Valve</MenuItem>
          <MenuItem value='2-1/2" Handwheel Valve'>2-1/2" Handwheel Valve</MenuItem>
          <MenuItem value='2-1/2" Electric Valve'>2-1/2" Electric Valve</MenuItem>
          <MenuItem value='3" Manual Valve'>3" Manual Valve</MenuItem>
          <MenuItem value='3" Handwheel Valve'>3" Handwheel Valve</MenuItem>
          <MenuItem value='3" Electric Valve'>3" Electric Valve</MenuItem>
          </Select>      
      </FormControl> 

      <FormControl >        
      <InputLabel htmlFor="interfaceCover">
         Interface Cover 
      </InputLabel>                
          <Select onChange={this.handleInterfaceCover.bind(this)} defaultValue="select interface cover" id="interfaceCover">          
          <MenuItem value='N/a'>N/A</MenuItem>
          <MenuItem value='Hypalon'>Hypalon</MenuItem>
          <MenuItem value='Treadplate'>Treadplate</MenuItem>
          </Select>      
      </FormControl>

      <FormControl >        
      <InputLabel htmlFor='interfaceControls'>
         Interface Controls 
      </InputLabel>                
          <Select onChange={this.handlefInterfaceControls.bind(this)} defaultValue="select interface controls" id="interfaceControls">          
          <MenuItem value='Single'>Single</MenuItem>
          <MenuItem value='Double'>Double</MenuItem>
          <MenuItem value='Triple'>Triple</MenuItem>
          </Select>      
      </FormControl>

      <FormControl >        
      <InputLabel htmlFor='tankFill'>
         Tank Filling
      </InputLabel>                
          <Select onChange={this.handleTankFilling.bind(this)} defaultValue="select tank filling" id="tankFill">          
          <MenuItem value='No power fill'>NO Power</MenuItem>
          <MenuItem value='Tank 1 power'>Tank 1 - Powered</MenuItem>
          <MenuItem value='Both Tanks power'>Tanks 1+2 - Powered</MenuItem>
          </Select>      
      </FormControl> 

      <FormControl >        
      <InputLabel htmlFor='boosterHose'>
         Booster Hose 
      </InputLabel>                
          <Select onChange={this.handleBoosterHose.bind(this)} defaultValue="select booster hose?" id="boosterHose">          
          <MenuItem value='0'>None</MenuItem>
          <MenuItem value='1'>One</MenuItem>
          </Select>      
      </FormControl>
<br />
            <button onClick={()=>this.handleUpdatePump}>
            Update This Pump
             </button>
            <button onClick={()=>this.handleCreatePump}>
                Create Pump
                </button>

   

          
 </form>
 </div>
</div>
)}
}