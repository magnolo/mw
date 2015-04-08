'use strict';

describe('Directive: within', function () {

  // load the directive's module
  beforeEach(module('mwApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<within></within>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the within directive');
  }));
});
