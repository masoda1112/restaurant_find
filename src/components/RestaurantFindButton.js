import React from 'react';

// スネークケース
// get_location

// キャメルケース
// getLocation

// 定数あるある
// const GRUNAVI_HOST = "https://grunavi.com/api/v1"

class RestaurantFindButton extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <button className='button' onClick={this.props.click}>現在地からレストランを探す</button>
    );
  }
}

export default RestaurantFindButton;