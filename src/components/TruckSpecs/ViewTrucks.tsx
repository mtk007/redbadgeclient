import React, { Component } from "react";
// import { Table } from "reactstrap";
// import APIURL from "../Site/environment";

// type ViewData = {
//   id: number;
//   truckType: string;
//   //createdAt: string, https://www.codegrepper.com/code-examples/javascript/get+only+date+without+time+in+typescript
//   userId: number;
//   getalltrucks: [];
// };

// type AcceptedProps = {
//   sessionToken: string | null;
// };

// export default class ViewMyTrucks extends Component<AcceptedProps, ViewData> {
//   constructor(props: AcceptedProps) {
//     super(props);
//     this.state = {
//       id: 0,
//       truckType: "",
//       //createdAt: '',https://www.codegrepper.com/code-examples/javascript/get+only+date+without+time+in+typescript
//       userId: 0,
//       getalltrucks: [],
//     };
//   }

//   componentWillMount() {
 
//     fetch(`${APIURL}/truckbasics/getalltrucks`, {
//       method: "GET",
//       headers: new Headers({
//         "Content-Type": "application/json",
//         Authorization: localStorage.token,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           getalltrucks: data,
//         });
//       });
//   }

//   render() {
//     const { getalltrucks } = this.state;
//     return (
//       <div>
//         <br />
//         <div className="mytruckstable">
//           {getalltrucks.map((truck: any) => {
//             <div className="trucksid">
//               <Table>
//                 <thead>
//                   <tr>
//                     <th>My Truck Order #</th>
//                     <th>Truck Model Version</th>
//                     <th>Truck Order Creation Date</th>
//                     <th>My User Id</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td>{truck.id}</td>
//                     <td>{truck.truckType}</td>
//                     <td>n/a</td>
//                     <td>{truck.userId}</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             </div>;
//           })}
//         </div>
//       </div>
//     );
//   }
// }

