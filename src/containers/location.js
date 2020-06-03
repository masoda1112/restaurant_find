import Search from './restaurant_search';

function Location(){
    navigator.geolocation.getCurrentPosition(function(position){
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      Search(this.latitude,this.longitude) //latitudeとlonを用いてSearch関数を呼び出す
    });}
export default Location;