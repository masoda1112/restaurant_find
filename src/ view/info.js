import React from 'react';
//import Restaurant_info from './info';

class Info extends React.Component{
  render()
  {
    return (
    <div　class = 'restaurant_info'>
        <h1 className = 'name'>店名</h1>
        <p className ='address'>住所</p>
        <p className ='url'>URL</p>
    </div>
    );
  }
}

export default Info;