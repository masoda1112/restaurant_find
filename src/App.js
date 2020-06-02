import React from 'react';
import Map from './map';
import Info from './info';
import Button from './button';
import Search from './restaurant_search'
//import NodeEnvironment from 'jest-environment-node';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {latitude:0,longitude:0};
  }
  render()
  {
    function Location(){
      navigator.geolocation.getCurrentPosition(function(position){
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.setState({ latitude : this.latitude,longitude : this.longitude});  //stateの更新
        Search(this.state.latitude,this.state.longitude) //latitudeとlonを用いてSearch関数を呼び出す

      });}
    return (
    <div>
      <h1 class = 'title'>近くで人気のお店です</h1>
      <div class ='info'>
       <Info/>
      </div>
      <div class = 'map'>
       <ReactGoogleMapLoader/>
      </div>
      <div class = 'button'>
       <Button　onClick={()=>{Location()}}></Button>
      </div>
      <div class = 'location'>
       <p>{this.state.latitude}</p>
       <p>{this.state.longitude}</p>
      </div>
      
    </div>
    );
  }
}

export default App;
