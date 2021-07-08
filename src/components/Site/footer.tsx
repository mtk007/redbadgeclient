import React, { Component } from "react";
//import styled from "styled-components";
//import Typography from "material-ui/Typography";
//

const FooterContainer = styled.div`
  text-align: center;
  text-style: Roboto;
  position: absolute;
  bottom: 0;
  width: 100% !important;
  height: 100px !important ;
  background: #6cf;
`;

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
       {/** <Typography variant="title">Mid America Fire Fire Apparatus Builder v1.0</Typography>*/} 
      </FooterContainer>
    );
  }
}

export default Footer;


//or
// import {Row} from 'reactstrap';

// const Footer = () => {
//         return(
//             <footer>
//                 <Row>
//                     <p>&copy; Eleven Fifty 2021</p>
//                 </Row>
//             </footer>
//         );
// };

// export default Footer;