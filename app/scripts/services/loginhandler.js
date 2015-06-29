'use strict';

/**
 * @ngdoc service
 * @name frontEndPracticeApp.loginHandler
 * @description
 * # loginHandler
 * Factory in the frontEndPracticeApp.
 */
angular.module('frontEndPracticeApp')
    .factory('loginHandler', ['loginFormValidator', 'loginFormProcessor', 'loginStatus', function (loginFormValidator, loginFormProcessor, loginStatus) {

        var _validateForm, _handleLogin, _submitForm;

        /**
         *
         * @param email
         * @param password
         * @returns {*}
         * @private
         */
        _validateForm = function(email, password) {
            return loginFormValidator.validate(email, password);
        };

        /**
         *
         * @param email
         * @param password
         * @private
         */
        _submitForm = function(email, password) {
            return loginFormProcessor.submit(email, password);
        };

        /**
         *
         * @param email
         * @param password
         * @returns {*}
         * @private
         */
        _handleLogin = function(email, password) {

            if(!_validateForm(email, password)) {
                return loginStatus.validationError;
            }

            if (_submitForm(email, password)) {
                return loginStatus.success;
            }

            return loginStatus.fail;
        };

        // Public API here
        return {
            /**
             *
             * @param useremail
             * @param password
             * @returns {*}
             */
            handleLogin: _handleLogin
        };
    }]);
