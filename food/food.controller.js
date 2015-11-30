(function () {

  angular
    .module('food')
    .controller('FoodController', function($scope, $location, FoodService, $routeParams){

      /////THIS GETS ALL STORE DATA/////
    $scope.searchRecipe = function(zip){
        FoodService.getItems(zip).then(function(items){
        $scope.items = items;
        $location.path("/recipe");
      })
    }
    FoodService.getItems('29001').then(function(items){
    $scope.items = items;
  })

    //
    //
    // .controller('FoodController', function ($scope, FoodService) {
    //   FoodService.getItems().success(function (items) {
    //     console.log(items);
    //     $scope.allItems = items;
    //     });
    //     $scope.addItem = function (newItem) {
    //       console.log(newItem);
    //       FoodService.getSingleItem(newItem);
    //     };
        // $scope.deleteItem = function (newItem) {
        //   console.log(newItem);
        //   FoodService.deleteItem(newItem);
        // };

    // })
    // .controller('ConsumerController', function ($scope, ConsumerService, GrinchService) {
    //   GrinchService.getItems().success(function (items) {
    //     console.log(items);
    //     $scope.allItems = items;
    //     });
    //
    //   ConsumerService.getCartItems().success(function (items) {
    //     console.log(items);
    //     $scope.allCartItems = items;
    //   });
    //   $scope.addCartItem = function (newItem) {
    //     console.log(newItem);
    //     ConsumerService.createCartItem(newItem);
    //   };
    //   $scope.deleteCartItem = function (newItem) {
    //     console.log(newItem);
    //     ConsumerService.deleteCartItem(newItem);
    //   };
    //
    //     });
});

})();
