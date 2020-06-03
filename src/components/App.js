import React from 'react';
import GoogleMap from './map';
import Info from './info';
import Button from './button';
//import NodeEnvironment from 'jest-environment-node';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {latitude:0,longitude:0};
  }
  render()
  {
    return (
    <div>
      <h1 class = 'title'>近くで人気のお店です</h1>
      <div class ='info'>
       <Info/>
      </div>
      <div class = 'map'>
       <GoogleMap/>
      </div>
      <div class = 'button'>
       <Button/>
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
