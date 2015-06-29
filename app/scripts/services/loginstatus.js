'use strict';

/**
 * @ngdoc service
 * @name frontEndPracticeApp.loginStatus
 * @description
 * # loginStatus
 * Constant in the frontEndPracticeApp.
 */
angular.module('frontEndPracticeApp')
    .constant('loginStatus', {
        success:         'success',
        fail:            'fail',
        validationError: 'error'
    });
