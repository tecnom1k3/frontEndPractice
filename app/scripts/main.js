'use strict';

var acme = acme || {};

/**
 * Revealing Module Pattern Implementation.
 *
 * @type {{removeClassFromSelector, addClassToSelector, getBootstrapHiddenClass}}
 */
acme.cssAndSelectorModule = (function($) {
    var _removeClassFromSelector, _addClassToSelector, bootstrapHiddenClass, _getBootstrapHiddenClass;

    /**
     *
     * @type {string}
     */
    bootstrapHiddenClass = 'hidden';

    /**
     *
     * @param selector
     * @param cssClass
     */
    _removeClassFromSelector = function(selector, cssClass) {
        if ($(selector).hasClass(cssClass)) {
            $(selector).removeClass(cssClass);
        }
    };

    /**
     *
     * @param selector
     * @param cssClass
     */
    _addClassToSelector = function(selector, cssClass) {
        if (!$(selector).hasClass(cssClass)) {
            $(selector).addClass(cssClass);
        }
    };

    /**
     *
     * @returns {string}
     * @private
     */
    _getBootstrapHiddenClass = function() {
      return bootstrapHiddenClass;
    };

    return {
        removeClassFromSelector: _removeClassFromSelector,
        addClassToSelector:      _addClassToSelector,
        getBootstrapHiddenClass: _getBootstrapHiddenClass
    };

})($);

/**
 * Module pattern with export variation implementation.
 *
 */
acme.showHideModule = (function(selectorModule) {
    var module, selectors, bootstrapHiddenClass;

    /**
     *
     * @type {{panels: {login: string}, alerts: {login: {failed: string, success: string}, requiredFieldsError: string}}}
     */
    selectors = {
        panels: {
            login: '#panelLogin'
        },
        alerts: {
            login: {
                failed:  '#alertLoginFailed',
                success: '#alertLoggedIn'
            },
            requiredFieldsError: '#alertRequiredFields'
        }
    };

    module = {};

    bootstrapHiddenClass = selectorModule.getBootstrapHiddenClass();

    /**
     *
     */
    module.showLoginPanel = function() {
        selectorModule.removeClassFromSelector(selectors.panels.login, bootstrapHiddenClass);
    };

    /**
     *
     */
    module.hideLoginPanel = function() {
        selectorModule.addClassToSelector(selectors.panels.login, bootstrapHiddenClass);
    };

    /**
     *
     */
    module.hideLoginSuccessAlert = function() {
        selectorModule.addClassToSelector(selectors.alerts.login.success, bootstrapHiddenClass);
    };

    /**
     *
     */
    module.showLoginSuccessAlert = function() {
        selectorModule.removeClassFromSelector(selectors.alerts.login.success, bootstrapHiddenClass);
    };

    /**
     *
     */
    module.hideLoginFailedAlert = function() {
        selectorModule.addClassToSelector(selectors.alerts.login.failed, bootstrapHiddenClass);
    };

    /**
     *
     */
    module.showLoginFailedAlert = function() {
        selectorModule.removeClassFromSelector(selectors.alerts.login.failed, bootstrapHiddenClass);
    };

    /**
     *
     */
    module.hideRequiredFieldAlert = function() {
        selectorModule.addClassToSelector(selectors.alerts.requiredFieldsError, bootstrapHiddenClass);
    };

    /**
     *
     */
    module.showRequiredFieldsAlert = function() {
        selectorModule.removeClassFromSelector(selectors.alerts.requiredFieldsError, bootstrapHiddenClass);
    };

    return module;

})(acme.cssAndSelectorModule);

/**
 * Module Pattern implementation.
 *
 * @type {{handleShowLoginBtnClick, handleDoLoginBtnClick}}
 */
acme.loginModule = (function($, showHideModule) {

    var selectors, loginService, doFormValidation, doFormSubmission;

    /**
     *
     * @type {{inputs: {email: string, password: string}}}
     */
    selectors = {
        inputs: {
            email:    '#inputEmail',
            password: '#inputPassword'
        }
    };

    /**
     *
     * @type {string}
     */
    loginService = 'login.json';

    /**
     *
     * @returns {boolean}
     */
    doFormValidation = function() {
        return ($(selectors.inputs.email).val() !== '' && $(selectors.inputs.password).val() !== '' );
    };

    /**
     *
     */
    doFormSubmission = function() {
        $.get(loginService, function(data) {
            if (data.validUser) {
                showHideModule.hideLoginPanel();
                showHideModule.showLoginSuccessAlert();
            } else {
                showHideModule.showLoginFailedAlert();
            }
        });
    };

    return {
        handleShowLoginBtnClick: function() {
            showHideModule.showLoginPanel();
            showHideModule.hideLoginSuccessAlert();
        },
        handleDoLoginBtnClick: function() {
            showHideModule.hideLoginFailedAlert();

            showHideModule.hideRequiredFieldAlert();
            if (doFormValidation()) {
                doFormSubmission();
            } else {
                showHideModule.showRequiredFieldsAlert();
            }
        }
    };
})($, acme.showHideModule);

$(function() {
	$('#btnShowLogin').click(function (e) {
		e.preventDefault();
        acme.loginModule.handleShowLoginBtnClick();
	});
	
	$('#btnDoLogin').click(function (e) {
		e.preventDefault();
        acme.loginModule.handleDoLoginBtnClick();
	});
});
