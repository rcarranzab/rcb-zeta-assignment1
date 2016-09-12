(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {

    var messages = ['Please enter data first...', 'Enjoy!!!', 'Too much!!!'];

    $scope.checkForLunch = function () {
      $scope.message = getMessage();
    };

    var getMessage = function () {
      var message = messages[0];
      var size = getLunchSize();
      if(size > 0) {
        if(size <= 3) {
          message = messages[1];
        } else {
          message = messages[2];
        }
      }
      return message;
    };

    var getLunchSize = function () {
      if(isLunchValid()) {
        return validateArray($scope.lunch.trim().split(','));
      } else {
        return 0;
      }
    };

    var validateArray = function (lunchArray) {
      var validatedArray = [];
      for(var i = 0; i < lunchArray.length; i++) {
        if(lunchArray[i] !== '') {
          validatedArray.push(lunchArray[i]);
        }
      }
      return validatedArray.length;
    };

    var isLunchValid = function () {
      return $scope.lunch && $scope.lunch !== '';
    };

    $scope.clearField = function () {
      $scope.lunch = '';
      $scope.message = '';
    };
  }
})();
