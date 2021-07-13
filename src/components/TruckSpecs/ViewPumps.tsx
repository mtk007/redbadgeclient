 import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import { Table } from 'reactstrap';
// import APIURL from '../Site/environment';
// //import myTrucks from '../TruckSpecs/ViewTrucks';



// type ViewData = {
//     myTrucks: any[],
//     id: number,
//     pumpModel: string,
//    // createdAt: string,https://www.codegrepper.com/code-examples/javascript/get+only+date+without+time+in+typescript
//     userId: number,
// }

// type AcceptedProps = {
//     sessionToken: string | null,
// }

// export default class ViewMyPumps extends Component<AcceptedProps, ViewData> {
//     constructor(props: AcceptedProps) {
//         super(props)
//         this.state = {
            
//             myTrucks: [],
//             id: 0,
//             pumpModel: '',
//            // createdAt: '',https://www.codegrepper.com/code-examples/javascript/get+only+date+without+time+in+typescript
          
//             userId: 0,
//         }
//     }


//     componentWillMount()  {

//         fetch(`${APIURL}/pumpfeatures/getpumpfeatures`, {
//             method: 'GET',
//             headers: new Headers({
//                 'Content-Type': 'application/json',
//                 'Authorization': localStorage.token
//             })
//         }).then(
//             (response) => response.json()
//         ).then((data) => {
//             console.log(data)
//             this.setState({
//                 myPumps: data,
//             })

//         })
//     }



//     render() {
//         const { myPumps } = this.state;
//         return (
//             <ViewMyPumps>
//                 <br />
//                 {myPumps.length > 0 && (
//                     <div className='myPumpsTable'>
//                         {myPumps.map(myPumps => (
//                             <div className='Pumpsid'>
//                                 <Table>
//                                     <thead>
//                                         <tr>
//                                             <th>My Truck Order #</th>
//                                             <th>Pump Model Version</th>
//                                             <th>Truck/Pump Order Creation Date</th>
//                                             <th>My Pumps</th>
//                                             <th>My User Id</th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr>
//                                             <td>{myPumps.id}</td>
//                                             <td>{myPumps.truckType}</td>
//                                             <td>n/a</td>
//                                             <td>{myPumps.type}</td>
//                                             <td>{myPumps.userId}</td>
//                                         </tr>
//                                     </tbody>
//                                 </Table>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </ViewMyPumps>
//         )
//     }
// }
