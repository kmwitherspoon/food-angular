(function () {
  "use strict";
  angular
    .module('food')
    .factory('FoodService', function ($http) {
      var urlOptions = {
          baseUrl: 'http://api.wunderground.com/api/',
          apiKey: 'a34d8a417d79f534',
          // callback: '&callback=JSON_CALLBACK',
          buildUrl: function (zip) {
            return this.baseUrl + this.apiKey + '/conditions/q/' + zip + '.json';
          }
        };
        // var buildImgUrl = function (obj) {
        //   return 'https://farm' + obj.farm + '.staticflickr.com/' + obj.server + '/' + obj.id + '_' + obj.secret + '_z.jpg';
        // };
        var getSingleItem = function(item){
        return $http.get(urlOptions.buildUrl()).then(function(data){
          console.log(data.data.results.item);
        })
      };
      var getItems = function(item){
        return $http.get(urlOptions.buildUrl(item)).then(function(data){
          return data.data.results;
        })
      };
      return {
        getItems : getItems,
        getSingleItem : getSingleItem
      };
    })

})();
