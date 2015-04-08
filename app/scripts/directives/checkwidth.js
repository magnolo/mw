'use strict';

/**
 * @ngdoc directive
 * @name mwApp.directive:checkwidth
 * @description
 * # checkwidth
 */
angular.module('mwApp')
	.directive('checkwidth', function($window) {
		return {

			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				scope.setDrag = function() {
					console.log(element);
					console.log(attrs.snapIgnore);
					if ($window.innerWidth < 977) {
						attrs.snapIgnore = "false";
						element.attr('data-snap-ignore', false);
					} else {
						attrs.snapIgnore = "true";
						element.attr('data-snap-ignore', true);
					}
				};
				$(window).resize(function() {
					scope.setDrag();
				});
				scope.setDrag();

			}
		};
	});