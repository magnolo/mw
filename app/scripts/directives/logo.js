'use strict';

/**
 * @ngdoc directive
 * @name mwApp.directive:logo
 * @description
 * # logo
 */
angular.module('mwApp')
	.directive('logo', function() {
		return {
			templateUrl: 'views/templates/logo.html',
			restrict: 'E',
			replace: true
		};
	});