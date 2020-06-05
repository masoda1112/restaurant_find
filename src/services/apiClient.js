import axios from 'axios';
// Axiosを使ったAPI呼び出し関数を実装
//あくまでapiのurlを指定するだけ

const GURUNAVI_RESUTAURANT = 'https://api.gnavi.co.jp/RestSearchAPI/v3/';
const GURUNAVI_KUCHIKOMI = 'https://api.gnavi.co.jp/PhotoSearchAPI/v3/';
const GURUNAVI_ACCESSKEY　= '7f5adc83f233a3c40bf67fa992072c5d';
// 例
// export const getNews = newsId => axios.get(`${API_ROOT}/news/${newsId}`)
// export const getNewsList = () => axios.get(`${API_ROOT}/news`)


export const getRestaurantInfo = (lat,lng) => axios.get(`${GURUNAVI_RESUTAURANT}/?keyid=${GURUNAVI_ACCESSKEY}&latitude="+${lat}+"&longitude="+${lng}+"&range=1&lunch=1`).then(response => {
    return response.data;
})
// エラー時の処理は以下に記入する
// .catch(err => {
//     console.log('err:', err);
// });
export const getRestaurantKuchikomi = (lat,lng) => axios.get(`${GURUNAVI_KUCHIKOMI}/?keyid=${GURUNAVI_ACCESSKEY}&latitude="+${lat}+"&longitude="+${lng}+"&range=1`).then(response => {
    return response.data;
})
// エラー時の処理は以下に記入する
// .catch(err => {
//     console.log('err:', err);
// });