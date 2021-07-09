import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import TruckBasics from '../TruckSpecs/TruckBasics';
import PumpFeatures from '../TruckSpecs/PumpFeatures';
import FinalizeOrder from '../SubmitPage/FinalizeOrder';
import Logout from '../Logout/logout';

// import Home from './Home';

type AcceptedProps = {clearToken: ()=>
        void
}


const Navbar: React.FunctionComponent<AcceptedProps> = (props) => {
    return(
        <div className='sidebar'>
            <div className='sidebar-list-styling'>
                <ul className='sidebar-list list-unstyled'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/truckbasics'>Configure Truck</Link></li>
                    <li><Link to='/pumpfeatures'>Configure Pump</Link></li>
                    <li><Link to='/finalizeorder'>Finalize Order</Link></li>
                    <li><Link to='/help'>Help</Link></li>
                    
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Logout clearToken = {props.clearToken} /></li>
                
                </ul>
            </div>
            <div className='sidebar-route'>
                <Switch>
                    <Route exact path='/home'><Home /></Route>
                    <Route exact path='/truckbasics'><TruckBasics /></Route>
                    <Route exact path='/pumpfeatures'><PumpFeatures /></Route>
                    <Route exact path='/finalizeorder'><FinalizeOrder /></Route>
                    <Route exact path='/help'><Help /></Route>
                    <Route exact path='/admin'><Admin /></Route>
                </Switch>
            </div>
        </div>
    );
};


export default Navbar;