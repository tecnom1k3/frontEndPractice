'use strict';

describe('Service: loginFormProcessor', function () {

  // load the service's module
  beforeEach(module('frontEndPracticeApp'));

  // instantiate service
  var loginFormProcessor;
  beforeEach(inject(function (_loginFormProcessor_) {
    loginFormProcessor = _loginFormProcessor_;
  }));

  it('should do something', function () {
    expect(!!loginFormProcessor).toBe(true);
  });

});
