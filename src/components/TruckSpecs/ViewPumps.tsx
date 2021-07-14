 import React, { Component } from 'react';
// import { Table } from 'reactstrap';
// import APIURL from '../Site/environment';



//  type ViewData = {
//     id: number
//      pumpModel: string,
//    // createdAt: string,https://www.codegrepper.com/code-examples/javascript/get+only+date+without+time+in+typescript
//       userId: number,
//       getallpumps: [];
//  }

// type AcceptedProps = {
//   sessionToken: string | null,
// };

// export default class ViewMyPumps extends Component<AcceptedProps, ViewData> {
//    constructor(props: AcceptedProps) {
//          super(props)
//          this.state = {
//             id: 0,
//         pumpModel: "",
//         getallpumps: [],     
//            // createdAt: '',https://www.codegrepper.com/code-examples/javascript/get+only+date+without+time+in+typescript       
//            userId: 0,
//         };
// }

//   componentWillMount()  {
//      fetch(`${APIURL}/pumpfeatures/getpumpfeatures`, {
//              method: 'GET',
//              headers: new Headers({
//                  'Content-Type': 'application/json',
//                  'Authorization': localStorage.token
//              })
//         }).then(
//              (response) => response.json()
//          ).then((data) => {
//              console.log(data)
//              this.setState({
//                  getallpumps: data,
//              })
//          })
//      }

//      render() {
//          const { getallpumps } = this.state;
//          return (
//              <div>
//                  <br />
//                      <div className='myPumpsTable'>
//                          {getallpumps.map((pump: any) => (
//                              <div className='pumpsid'>
//                                  <Table>
//                                      <thead>
//                                         <tr>
//                                             <th>My Truck Order #</th>
//                                              <th>Pump Model Version</th>
//                                              <th>Truck/Pump Order Creation Date</th>
//                                              <th>My Pumps</th>
//                                           <th>My User Id</th>
//                                         </tr>
//                                      </thead>
//                                       <tbody>
//                                              <tr>
//                                              <td>{pump.id}</td>
//                                              <td>{pump.pumpModel}</td>
//                                              <td>n/a</td>
//                                              <td>n/a</td>
//                                              <td>{pump.userId}</td>
//                                          </tr>
//                                      </tbody>
//                                  </Table>
//                              </div>
//                          ))}
//                      </div>
//                      </div>
//                  );
//             } 
//         }
