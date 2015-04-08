'use strict';

/**
 * @ngdoc directive
 * @name mwApp.directive:wrapspan
 * @description
 * # wrapspan
 */
angular.module('mwApp')
	.directive('wrapspan', function() {
		return {
			restrict: 'A',
			templateUrl: 'views/templates/head.html',
			replace: true,
			transclude: true,
			scope: {
				text: '='
			},
			link: function postLink(scope, element, attrs) {
				if (scope.text.indexOf(' ') !== -1) {
					scope.first = scope.text.substring(0, scope.text.lastIndexOf(' '));
					scope.last = scope.text.substring(scope.text.lastIndexOf(' '));
				} else {
					scope.first = scope.text;
					scope.last = "";
				}
			}
		};
	});