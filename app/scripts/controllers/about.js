'use strict';

/**
 * @ngdoc function
 * @name frontEndPracticeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontEndPracticeApp
 */
angular.module('frontEndPracticeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
