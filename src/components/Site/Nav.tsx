import React from 'react';
import { Route, Link, Switch} from 'react-router-dom';
import TruckData from '../TruckSpecs/TruckData';
import PumpData from '../TruckSpecs/PumpData';
import FinalizeOrder from '../SubmitPage/FinalizeOrder';
import Logout from '../Logout/logout';
import Help from '../Site/Help';
import Admin from '../Auth/ChiefsOfficeAdmin';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
// import Home from './Home';
import APIURL from '../Site/environment';
import navLogo from '../../assets/mafslogo.png'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import ChiefOffice from '../Auth/ChiefsOfficeAdmin';

type AcceptedProps = {
    updateToken: (newToken: string) => void,
    sessionToken: string | null
    clearToken: () => void
}

const Navbar: React.FunctionComponent<AcceptedProps> = (props) => {
    if(localStorage.getItem('role')=='admin'){

    
    return(
        <div className='sidebar'>
            <div>
                                                            </div> 
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                <img src={navLogo} alt="mafslogo"/>
             
                    {/*<li><Link to='/'>Home</Link></li>*/}
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='register'>Register</Link></li>
                    <li><Link to='/truckdata'>Configure Truck</Link></li>
                    <li><Link to='/pumpdata'>Configure Pump</Link></li>
                    <div className='chief'><li><Link to='/chiefsofficeadmin'>Chief's Admin Office</Link></li></div>
                   {/* <li><Link to='/finalizeorder'>Finalize Order</Link></li>*/}
                   {/*   <li><Link to='/help'>Help</Link></li>   */}
                   {/*   <li><Link to='/admin'>Admin</Link></li> */}
             <li><button onClick={props.clearToken}>Logout</button></li> 
                </ul>
            </div>

            <div className='sidebar-route'>
                <Switch>
                    {/*<Route exact path='/home'><Home /></Route>*/}
                    <Route exact path='/login'><Login updateToken={props.updateToken}/></Route>
                    <Route exact path='/register'><Register updateToken={props.updateToken}/></Route>
                    <Route exact path='/truckdata'><TruckData sessionToken={props.sessionToken}/></Route>
                    <Route exact path='/pumpdata'><PumpData sessionToken={props.sessionToken}/></Route>
                    <Route exact path='/chiefsofficeadmin'><ChiefOffice sessionToken={props.sessionToken}/></Route>
                   {/* <Route exact path='/finalizeorder'><FinalizeOrder sessionToken={props.sessionToken}/></Route>
                    <Route exact path='/help'><Help sessionToken={props.sessionToken}/></Route>
    <Route exact path='/admin'><Admin sessionToken={props.sessionToken}/></Route> */}
                </Switch>
            </div>
        </div>
    );
} else
{
    return(
        <div className='sidebar'>
            <div>
                                                            </div> 
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                <img src={navLogo} alt="mafslogo"/>
             
                    {/*<li><Link to='/'>Home</Link></li>*/}
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='register'>Register</Link></li>
                    <li><Link to='/truckdata'>Configure Truck</Link></li>
                    <li><Link to='/pumpdata'>Configure Pump</Link></li>
                   {/* <li><Link to='/finalizeorder'>Finalize Order</Link></li>*/}
                   {/*   <li><Link to='/help'>Help</Link></li>   */}
                   {/*   <li><Link to='/admin'>Admin</Link></li> */}
             <li><button onClick={props.clearToken}>Logout</button></li> 
                </ul>
            </div>

            <div className='sidebar-route'>
                <Switch>
                    {/*<Route exact path='/home'><Home /></Route>*/}
                    <Route exact path='/login'><Login updateToken={props.updateToken}/></Route>
                    <Route exact path='/register'><Register updateToken={props.updateToken}/></Route>
                    <Route exact path='/truckdata'><TruckData sessionToken={props.sessionToken}/></Route>
                    <Route exact path='/pumpdata'><PumpData sessionToken={props.sessionToken}/></Route>
                   {/* <Route exact path='/finalizeorder'><FinalizeOrder sessionToken={props.sessionToken}/></Route>
                    <Route exact path='/help'><Help sessionToken={props.sessionToken}/></Route>
    <Route exact path='/admin'><Admin sessionToken={props.sessionToken}/></Route> */}
                </Switch>
            </div>
        </div>
    );
}
};


export default Navbar;