(function () {
  "use strict";
  angular
    .module('food')
    .factory('FoodService', function ($http) {
      var urlOptions = {
        baseUrl: 'http://api.yummly.com/v1/api/recipes?_app_id=',
        appid: 'c191f173',
        apiKey: '232d6f2656512b0a2475ed0804ce85aa',
        // callback: '&callback=JSON_CALLBACK',
        buildUrl: function (keyword) {
          return this.baseUrl + this.appid + '&_app_key=' + this.apiKey + '&q=' + keyword + '&requirePictures=true';
        }
      };
      var getSingleItem = function(item){
        return $http.get(urlOptions.buildUrl()).then(function(data){
          console.log(data.data.results.item);
        })
      };
      var getItems = function(chicken){
        return $http.get(urlOptions.buildUrl(chicken)).then(function(data){
          return data.data.results;
        })
      };
      return {
        getItems : getItems,
        getSingleItem : getSingleItem
      };
    })

})();
