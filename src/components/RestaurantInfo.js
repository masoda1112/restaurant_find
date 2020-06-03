import React from 'react';

class RestaurantInfo extends React.Component {
  render() {
    //Searchで取ってきた情報をStateに格納する
    return (
      <div className='restaurant_info'>
        <h1 className='name'>店名</h1>
        <p className='address'>住所</p>
        <p className='url'>URL</p>
      </div>
    );
  }
}

export default RestaurantInfo;