/*import React from 'react';
//import Gmap from './gmap';
import * as React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import GoogleMapReact from 'google-map-react'
*/

import React from "react"
import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"

const bnCoord = {
  lat: 44.597923,
  lng: 0.873799,
}

class Map extends React.Component{
const Map = () => (
    <ReactGoogleMapLoader
      params={{
        key: "AIzaSyC_wlSHbH7UTv78eTGkx0B4NvdJ71MMCzk",
      }}
      style={{height: "100%"}}
      render={googleMaps => {
        return (
          googleMaps && (
            <ReactGoogleMap
              googleMaps={googleMaps}
              coordinates={[
                {
                  title: "Bosc Nègre",
                  position: bnCoord,
                },
              ]}
              center={bnCoord}
              zoom={8}
            />
          )
        )
      }}
    />
)
}
export default Map;




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
 