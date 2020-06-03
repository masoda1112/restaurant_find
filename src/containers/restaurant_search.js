import GoogleMap from './gmap'
function Search(latitude,longitude){
get(
    'http://api.gnavi.co.jp/RestSearchAPI/20150630/',
    {
      keyid: '私のぐるなび用のキー',
      format: 'json',
      lat: latitude,//緯度の変数
      lon: longitude,//経度の変数
      range: '1'
    },
    function(response) {
      // ぐるなびAPIのコールバック関数
      var results = response.rest
      $('#result').empty();
      for (var i = 0; i < results.length; i++) {
        var result = results[i];
        $('<li><a></a></li>')
          .find('a')
            .text(result.name)
            .attr('href', result.url)
          .end()
          .appendTo('#result');
      }
    },
    'jsonp'
  );
  GoogleMap();
};