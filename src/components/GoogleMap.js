/*import React from 'react';
//import Gmap from './gmap';
import * as React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import GoogleMapReact from 'google-map-react'
*/

import React, { Component } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

class GoogleMap extends Component {
  state = {
    lat: null,
    lng: null
  }
  // Search(latitude,longitude){ //resutaurant_searchからレストランの緯度経度を持って来たいのだが、この書き方ではないようだ。
  //   this.setState({ lat : latitude,lng : longitude});
  // }
  render() {
    return (
      <Map
        google = { this.props.google }
        zoom = { 14 }
        center = {{ lat: this.state.lat, lng: this.state.lng }}
        initialCenter = {{ lat: this.state.lat, lng: this.state.lng }}
      >
        <Marker
          title = { "現在地" }
          position = {{ lat: this.state.lat, lng: this.state.lng }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyC_wlSHbH7UTv78eTGkx0B4NvdJ71MMCzk")
})(GoogleMap);




/*class Map extends React.Component{
   render()
    {
      function initMap() {
          var opts = {
            zoom: 15,
            center: new google.maps.LatLng(35.1239654, 136.9417741)
          };
          var map = new google.maps.Map(document.getElementById("map"), opts);
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_wlSHbH7UTv78eTGkx0B4NvdJ71MMCzk&callback=initMap"  
      }
      return (
    <div　class = 'gmap'>
          <div id="map" style="width:620px; height:400px"></div>
      </div>
      );
    }
  }
  
  export default Map;
  */
 