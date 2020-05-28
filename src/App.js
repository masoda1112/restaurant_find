import React from 'react';
import Map from './map';
import Info from './info';
import Button from './button'

class App extends React.Component{
  render()
  {
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
       <Button/>
      </div>
      
    </div>
    );
  }
}

export default App;
