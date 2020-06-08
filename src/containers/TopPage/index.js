import React from "react";
import RestaurantInfo from "../../components/RestaurantInfo";
import GoogleMap from "../../components/GoogleMap";
import RestaurantFindButton from "../../components/RestaurantFindButton";
import {findNearestRestaurant} from "../../actions/findNearestRestaurant";

export default class TopPage extends React.Component {
  constructor(props) {
    super(props);
  // 現在地取得できているか確認用
  this.state = ({latitude:0,longitude:0});
  this.findRestaurant = this.findRestaurant.bind(this);
  };

  onSearchCurrentLocation = () => {
     navigator.geolocation.getCurrentPosition(position => {
        // latitude = position.coords.latitude;
        // longitude = position.coords.longitude;
        // 以下現在地取得できているか確認用
        this.setState({latitude: position.coords.latitude});
        this.setState({longitude: position.coords.longitude});
    });
   }

  findRestaurant = (latitude, longitude) => {
    // TODO: 現在地から最も近い店を探す
    findNearestRestaurant(latitude,longitude);
   }

  componentDidMount() {
    this.onSearchCurrentLocation();
  }

  render() {
    return (
      <div>
        <h1 className='title'>近くで人気のお店です</h1>
        <div className='info'>
          <RestaurantInfo/>
        </div>
        <div className='map'>
          <GoogleMap/>
        </div>
        <div className='button-wrapper'>
          <RestaurantFindButton
            click={() => this.findRestaurant(this.state.latitude, this.state.longitude)} 
          />
        </div>
        {/* 以下現在地取得確認用 */}
        <div className='location'>
          <p>{this.state.latitude}</p>
          <p>{this.state.longitude}</p>
        </div>
      </div>
    );
  }
}