class FinalizeOrder extends React.Component {

    render() {
       
  const { mafslogo, overlapGroup1, help, spanText, spanText2, spanText3, spanText4, place, polygon2 } = this.props 
      
      return (
        
      <div class="container-center-horizontal">
  <form className="submit-page screen"
          onclick="window.open('javascript:SubmitForm(%27form6%27)', '_self');"
      
            name="form6" action="form6" method="post">
  <div className="flex-row-2"><img className="mafslogo-1" 
  src={mafslogo}
  /><a href="javascript:ShowOverlay('ipad-nexus-9-8', 'animate-appear');" onClick={window.event.stopPropagation()} >
  <div className="component-4-3">
  <div className="overlap-group1-1" style={{backgroundImage:`url(${overlapGroup1})`}} ><div className="help-1 roboto-black-thunderbird-29px"
  >{help}</div>
  </div>
  </div></a>
  </div><div className="text-4"
  ><span ="span0 ">{spanText}</span><span ="span1 ">{spanText2}</span></div>
  <div className="overlap-group-2"><a href="javascript:SubmitForm('form6')" onClick={window.event.stopPropagation()} >
  <div className="ellipse-7">
  </div></a><div className="text-3"
  ><span >{spanText3}</span><span ="span1-1 ">{spanText4}</span></div>
  </div><Link to="/ipad-nexus-9-5" onClick={window.event.stopPropagation()}  className="align-self-flex-start">
  <div className="component-6-3">
  <div className="overlap-group2"><a onClick={window.event.stopPropagation()} >
  <div className="rectangle-6-1 border-6px-smalt">
  </div></a><div className="place-1 roboto-black-thunderbird-35px"
  >{place}</div><img className="polygon-2-2" 
  src={polygon2}
  />
  </div>
  </div></Link>
  </form>
  </div>
  );
    }
  }
  
  
  
  export default FinalizeOrder;