import React from 'react';

// スネークケース
// get_location

// キャメルケース
// getLocation

// 定数あるある
// const GRUNAVI_HOST = "https://grunavi.com/api/v1"

class RestaurantFindButton extends React.Component{
  render() {
    return (
      <button type='button' className='button'>現在地からレストランを見つける</button>
    );
  }
}

export default RestaurantFindButton;