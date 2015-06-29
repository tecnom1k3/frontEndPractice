'use strict';

/**
 * @ngdoc service
 * @name frontEndPracticeApp.loginFormProcessor
 * @description
 * # loginFormProcessor
 * Service in the frontEndPracticeApp.
 */
angular.module('frontEndPracticeApp')
    .service('loginFormProcessor', ['loginCredentials', function (loginCredentials) {
        /**
         *
         * @param username
         * @param password
         */
        this.submit = function (username, password) {
            return (username == loginCredentials.email) && (password == loginCredentials.password);
        };
    }]);
