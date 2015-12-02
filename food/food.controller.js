(function () {

  angular
    .module('food')
    .controller('FoodController', function($scope, $location, FoodService, $routeParams){

      /////THIS GETS ALL STORE DATA/////
    $scope.searchRecipe = function(items){
        FoodService.getItems(items).then(function(items){
        $scope.items = items;
        // $location.path("/recipe");
      })
    }
    FoodService.getItems('').then(function(items){
    $scope.items = items;
  });
});

})();
