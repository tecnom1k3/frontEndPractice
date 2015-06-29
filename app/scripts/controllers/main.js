'use strict';

/**
 * @ngdoc function
 * @name frontEndPracticeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontEndPracticeApp
 */
angular.module('frontEndPracticeApp')
  .controller('MainCtrl', ['$scope', 'loginHandler', 'loginStatus',  function ($scope, loginHandler, loginStatus) {

        var init;

        init = function() {
            $scope.showLoginPanel      = false;
            $scope.showLoginSuccess    = false;
            $scope.showValidationError = false;
            $scope.showLoginError      = false;
            $scope.user = {
                email:    '',
                password: ''
            };
        };

        init();

        $scope.clickLogin = function() {
            init();
            $scope.showLoginPanel   = true;
        };

        $scope.clickDoLogin = function() {
            var result;

            $scope.showLoginSuccess    = false;
            $scope.showValidationError = false;
            $scope.showLoginError      = false;

            result = loginHandler.handleLogin($scope.user.email, $scope.user.password);

            if (result == loginStatus.success) {
                $scope.showLoginSuccess = true;
                $scope.showLoginPanel   = false;
            }

            if (result == loginStatus.fail) {
                $scope.showLoginError = true;
            }

            if (result == loginStatus.validationError) {
                $scope.showValidationError = true;
            }
        };
    }]);
