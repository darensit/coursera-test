( function () {
  'use strict';

  var myApp = angular.module('LunchCheck', []);

  myApp.controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

      $scope.showLunchMessage = function () {
          var lunchItems = $scope.lunchItems;
          var message = 'Please enter data first';
          if(lunchItems) {
              var items = lunchItems.split(',');
              var numberOfItems = getNumberOfItems(items);
              if (numberOfItems > 3) {
                  message = 'Too much!';
              } else if (numberOfItems > 0) {
                  message = 'Enjoy!';
              }
          }
          $scope.message = message;
      }

      $scope.checkContent = function() {
          if($scope.lunchItems.trim().length === 0) {
              $scope.message = '';
          }
      }

      function getNumberOfItems(items) {
        var numberOfItems = 0;
        for(var i = 0; i < items.length; i++) {
            if(items[i].trim().length > 0) {
                numberOfItems++;
            }
        }
        return numberOfItems;
      }
  }
})();
