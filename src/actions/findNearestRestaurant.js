import {getRestaurantInfo,getRestaurantKuchikomi} from "../services/apiClient"
import {restaurantsArray,kuchikomiArray,nearestRestaurant} from "../models/restaurantData"

export const findNearestRestaurant = (lat,lng) => {
    // apiClientに実装されているAPIリクエストを呼び出してレスポンスからお店の情報を取り出して返す
    let restaurantsInfo = getRestaurantInfo(lat,lng);
    let kuchikomiInfo = getRestaurantKuchikomi(lat,lng);

// restaurantsInfoの情報をrestauransArrayに追加
    for (var i = 0; i < restaurantsInfo.length; i++) {
// const restaurant = new Restaurants(restaurantsInfo.name,restaurantsInfo.address,restaurantsInfo.id);
          let restaurant = new Array(restaurantsInfo.name,restaurantsInfo.address,restaurantsInfo.id);
          restaurantsArray.push(restaurant)
      }
// kuchikomiInfoの情報をkuchikomiArrayに追加
    for (var i = 0; i < restaurantsInfo.length; i++) {
        let kuchikomi = new Array(kuchikomiInfo.total_score,kuchikomiInfo.id);
        kuchikomiArray.push(kuchikomi)
      }
// kuchikomiArrayをtotal_scoreで降順にする
    kuchikomiArray.total_score.sort(compareFunc);
//kuchikomiArrayのtotal_scoreの大きいレストラン順にrestaurantsArrayを探索見つけたらnearestRestaurantArrayに格納
    for (let i = 0; i < restaurantsArray.length; i++) {
        if (restaurantsArray.id.indexOf(kuchikomiArray.id[i]) === -1) {
            nearestRestaurant.push(restaurantsArray[i])
            restaurantsArray.length = 0;
            kuchikomiArray.length = 0;
          break;
        }
      }
    return nearestRestaurant
  }
//　降順にするための関数
  function compareFunc(a, b) {
    return b - a;
  }

//マッキーさんが書いてくれたコードなので念のため消さない。引数が一つであり緯度経度が必要だと思ったためコメントアウト
// export const findNearestRestaurant = (currentLocation) => {
//     // apiClientに実装されているAPIリクエストを呼び出してレスポンスからお店の情報を取り出して返す

//   }