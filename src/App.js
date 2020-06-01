import React from 'react';
import Map from './map';
import Info from './info';
import Button from './button'
//import NodeEnvironment from 'jest-environment-node';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {lat:0,lon:0};
  }
  render()
  {
    function Location(){
      navigator.geolocation.getCurrentPosition(function(position){
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.setState({ lat : this.latitude,lon : this.longitude}); 
      });}
    return (
    <div>
      <h1 class = 'title'>近くで人気のお店です</h1>
      <div class ='info'>
       <Info/>
      </div>
      <div class = 'map'>
       <Map/>
      </div>
      <div class = 'button'>
       <Button　onClick={()=>{Location()}}></Button>
      </div>
      <div class = 'location'>
       <p>{this.state.lat}</p>
       <p>{this.state.lon}</p>
      </div>
      
    </div>
    );
  }
}

export default App;
