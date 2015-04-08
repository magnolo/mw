'use strict';

/**
 * @ngdoc directive
 * @name mwApp.directive:diamonds
 * @description
 * # diamonds
 */
angular.module('mwApp')
	.directive('diamond', function() {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				element.diamonds({
					size: 250,
					gap: 3
				})
			}
		};
	});