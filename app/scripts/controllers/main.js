'use strict';

/**
 * @ngdoc function
 * @name frontEndPracticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndPracticeApp
 */
angular.module('frontEndPracticeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
