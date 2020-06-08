import React from 'react';
import {nearestRestaurant} from '../models/restaurantData';

class RestaurantInfo extends React.Component {
  render() {
    //Searchで取ってきた情報をStateに格納する
    return (
      <div className='restaurant_info'>
        <h1 className='name'>{nearestRestaurant[nearestRestaurant.length-1][0]}</h1>
        <p className='address'>{nearestRestaurant[nearestRestaurant.length-1][1]}</p>
        <p className='url'>https://r.gnavi.co.jp/{nearestRestaurant[nearestRestaurant.length-1][2]}/</p>
      </div>
    );
  }
}

export default RestaurantInfo;
