(function() {
  'use strict';

  angular
    .module('food', [
      'ngRoute',
      'underscore',
      'moment'
    ])
    .config(function($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl: 'food/views/home.html',
          controller: 'FoodController as foodCtrl'
        })
        .when('/recipe/{{item.id}}', {
          templateUrl: 'food/views/recipe.html',
          controller: 'FoodController as foodCtrl'
        })
      });


     /// DEPENDENCIES ///
angular
 .module('underscore', [])
 .factory('_', function ($window) {
   return $window._;
 });
angular
 .module('moment', [])
 .factory('moment', function ($window) {
   return $window.moment;
 });

}());
