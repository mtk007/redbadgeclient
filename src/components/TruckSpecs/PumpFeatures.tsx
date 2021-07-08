import React from "react";
import { Link } from "react-router-dom";
import "./PumpFeatures.css";
import mafslogo from 

class PumpFeatures extends React.Component {
  render() {
    const { mafslogo } = this.props;

    return (
      <div class="">
        <form
          className="truck-basics screen"
          onclick="window.open('javascript:SubmitForm(truckform)', '_self');"
          name="truckform"
          action="truckform"
          method="post"
        >
          <div className="flex-row">
              <img className="mafslogo" src={mafslogo} />
            </div>
           
              
            <Link to="/customer-info" onClick={window.event.stopPropagation()}>
              <div className="component-6-2">
                <div className="overlap-group">
                  <a onClick={window.event.stopPropagation()}>
                    <div className="rectangle-6 border-6px-smalt"></div>
                  </a>
                  <div className="place roboto-black-thunderbird-35px">{place}</div>
                  <img className="polygon-2" src={polygon2} />
                </div>
              </div>
            </Link>
            <Link to="/ipad-nexus-9-5" onClick={window.event.stopPropagation()}>
              <div className="component-5-2">
                <div className="overlap-group">
                  <a onClick={window.event.stopPropagation()}>
                    <div className="rectangle-6 border-6px-smalt"></div>
                  </a>
                  <div className="next roboto-black-thunderbird-35px">{next}</div>
                  <img className="polygon-2-1" src={polygon22} />
                </div>
              </div>
            </Link>
          
        </form>
      </div>
    );
  }
}

export default PumpFeatures;
