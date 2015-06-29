'use strict';

/**
 * @ngdoc overview
 * @name frontEndPracticeApp
 * @description
 * # frontEndPracticeApp
 *
 * Main module of the application.
 */
angular
  .module('frontEndPracticeApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
