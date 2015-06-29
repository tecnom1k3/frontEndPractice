'use strict';

describe('Service: loginCredentials', function () {

  // load the service's module
  beforeEach(module('frontEndPracticeApp'));

  // instantiate service
  var loginCredentials;
  beforeEach(inject(function (_loginCredentials_) {
    loginCredentials = _loginCredentials_;
  }));

  it('should do something', function () {
    expect(!!loginCredentials).toBe(true);
  });

});
