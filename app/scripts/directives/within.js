'use strict';

/**
 * @ngdoc directive
 * @name mwApp.directive:within
 * @description
 * # within
 */
angular.module('mwApp')
	.directive('within', function() {
		return {
			restrict: 'A',
			link: function postLink(scope, element, attrs) {
				var fontwidth = $('.sidebar .text h1').width();
				element.css({
					width: fontwidth
				});

			}
		};
	});