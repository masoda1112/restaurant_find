import React from 'react';
import TopPage from "../containers/TopPage";
// import GoogleMap from './map';
// import Info from './info';
// import Button from './button';
//import NodeEnvironment from 'jest-environment-node';

// class App extends React.Component{
//   constructor(props) {
//     super(props);
//     this.state = {latitude:0,longitude:0};
//   }
//   render()
//   {
//     return (
//     <div>
//       <h1 className='title'>近くで人気のお店です</h1>
//       <div className='info'>
//        <Info/>
//       </div>
//       <div className='map'>
//        <GoogleMap/>
//       </div>
//       <div className='button'>
//        <Button/>
//       </div>
//       <div className='location'>
//        <p>{this.state.latitude}</p>
//        <p>{this.state.longitude}</p>
//       </div>
//
//     </div>
//     );
//   }
// }

export default () => (
    <div>
      <TopPage />
    </div>
);
