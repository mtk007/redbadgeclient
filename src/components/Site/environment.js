//let APIURL = 'https://cors-anywhere.herokuapp.com/http://firetruckbuilderclient.herokuapp.com';
let APIURL = '';
 switch (window.location.hostname) {
// // //     // this is the local host name of your react app
case 'localhost' || '127.0.0.1':
// // //         //this is the local host name of your API
APIURL = 'http://localhost:3000';
break;
// // //     // this is the deployed react application
case 'firetruckbuilderclient.herokuapp.com':
// //         //this is the full url of your deployed API
    APIURL = 'https://firetruckbuilder.herokuapp.com'
 }

export default APIURL;