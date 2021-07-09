import { render } from "@testing-library/react"

class FinalizeOrder extends React.Component {

    
       
  const { mafslogo, spanText4, place,  } = this.props 
  
  render()    
      return (
        
      <div class="container-center-horizontal">
     <form className="submit-page screen">
       <img className="mafslogo-1"                                 src={mafslogo}/>

    <div className="help-1 roboto-black-thunderbird-29px">{help}</div>
  
<form>
  <div className="overlap-group-2"><a href="javascript:SubmitForm('submitform')" onClick={window.event.stopPropagation()} >
</a></div>
  
 
  <div><span ="span1-1 ">{spanText4}</span></div>
  
  
  <Link to="/ipad-nexus-9-5" onClick={window.event.stopPropagation()}  className="align-self-flex-start">
  <div className="component-6-3">
  <div className="overlap-group2"><a onClick={window.event.stopPropagation()} >
  <div className="rectangle-6-1 border-6px-smalt">
  </div></a><div className="place-1 roboto-black-thunderbird-35px"
  >{place}</div>
  
  </div>
  </div></Link>
  </form>
  </div>
  );
    }

      <>
      <form>
<h1>Submit Your Order</h1>
<InputLabel> Truck Model </InputLabel>
      <Select onChange={this.handleInput */.bind(this)}>
      <MenuItem value='t(in array)ruck Model MVP'>MVP</MenuItem>
      <MenuItem value='t(in array)ruck Model MVP'>MVP</MenuItem>
      <MenuItem value='t(in array)ruck Model MVP'>MVP</MenuItem>
      <MenuItem value='t(in array)ruck Model MVP'>MVP</MenuItem>
      <MenuItem value='t(in array)ruck Model MVP'>MVP</MenuItem>
      </Select>
<InputLabel> </InputLabel>
<InputLabel> </InputLabel>
<InputLabel> </InputLabel>
<InputLabel> </InputLabel>
<InputLabel> </InputLabel>
<InputLabel> </InputLabel>
      <input

      </form>
    )
  }
  
  export default FinalizeOrder;