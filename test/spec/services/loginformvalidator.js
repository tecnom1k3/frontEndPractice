'use strict';

describe('Service: loginFormValidator', function () {

  // load the service's module
  beforeEach(module('frontEndPracticeApp'));

  // instantiate service
  var loginFormValidator;
  beforeEach(inject(function (_loginFormValidator_) {
    loginFormValidator = _loginFormValidator_;
  }));

  it('should do something', function () {
    expect(!!loginFormValidator).toBe(true);
  });

});
