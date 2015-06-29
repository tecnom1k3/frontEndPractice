'use strict';

describe('Service: loginStatus', function () {

  // load the service's module
  beforeEach(module('frontEndPracticeApp'));

  // instantiate service
  var loginStatus;
  beforeEach(inject(function (_loginStatus_) {
    loginStatus = _loginStatus_;
  }));

  it('should do something', function () {
    expect(!!loginStatus).toBe(true);
  });

});
