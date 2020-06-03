import React from "react";
import Info from "../../components/info";
import GoogleMap from "../../components/map";
import Button from "../../components/button";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {latitude:0,longitude:0};
  }

  render() {
    return (
      <div>
        <h1 className='title'>近くで人気のお店です</h1>
        <div className='info'>
          <Info/>
        </div>
        <div className='map'>
          <GoogleMap/>
        </div>
        <div className='button'>
          <Button/>
        </div>
        <div className='location'>
          <p>{this.state.latitude}</p>
          <p>{this.state.longitude}</p>
        </div>

      </div>
    );
  }
}