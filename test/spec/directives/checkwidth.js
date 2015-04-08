'use strict';

describe('Directive: checkwidth', function () {

  // load the directive's module
  beforeEach(module('mwApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<checkwidth></checkwidth>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the checkwidth directive');
  }));
});
