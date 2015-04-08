'use strict';

describe('Directive: particles', function () {

  // load the directive's module
  beforeEach(module('mwApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<particles></particles>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the particles directive');
  }));
});
