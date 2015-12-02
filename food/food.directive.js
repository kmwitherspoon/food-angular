(function () {
  "use strict";
  angular
    .module('food')
    .directive('favorite', function () {
      return {
        restrict: 'EA',
        templateUrl: 'food/views/food.directive.html',
        link: function (scope, element, attributes) {
          element.on('click', function (evt) {
            element.find('.favorite');
            element.css('color', 'red');
          });
        },
        scope: {
          action: "&"
        },
      };
    });

})();
