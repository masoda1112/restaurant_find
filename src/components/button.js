import React from 'react';
import Location from '../containers/location';

class Button extends React.Component{
  render()
  {
    return (
    <button onClick={()=>{Location()}}>レストランを見つける</button>
    );
  }
}

export default Button;