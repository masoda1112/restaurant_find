import React from "react";
import RestaurantInfo from "../../components/RestaurantInfo";
import GoogleMap from "../../components/GoogleMap";
import RestaurantFindButton from "../../components/RestaurantFindButton";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {latitude:0,longitude:0};
  }

  onSearchCurrentLocation = () => {
    // TODO: 現在地を取得する処理を書く
  }

  findRestaurant = () => {
    // TODO: 現在地から最も近い店を探す
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
        <div className='button'>
          <RestaurantFindButton onClick={() => this.findRestaurant()}/>
        </div>
        <div className='location'>
          <p>{this.state.latitude}</p>
          <p>{this.state.longitude}</p>
        </div>

      </div>
    );
  }
}