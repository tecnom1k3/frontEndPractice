'use strict';

/**
 * @ngdoc service
 * @name frontEndPracticeApp.loginFormValidator
 * @description
 * # loginFormValidator
 * Service in the frontEndPracticeApp.
 */
angular.module('frontEndPracticeApp')
    .service('loginFormValidator', function () {
        this.validate = function (username, password) {
            return (username !== '') && (password !== '');
        };
    });