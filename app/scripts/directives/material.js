'use strict';

/**
 * @ngdoc directive
 * @name mwApp.directive:material
 * @description
 * # material
 */
angular.module('mwApp')
	.directive('material', function() {
		return {
			require: 'ngModel',
			link: function(scope, element, attrs, ngModel) {
				element.parent().addClass('material');
				element.parent().append('<span class="highlight"></span>');
				element.parent().append('<span class="bar"></span>');
				attrs.$observe('ngModel', function(value) { // Got ng-model bind path here
					scope.$watch(value, function(newValue) { // Watch given path for changes
						if (newValue) {
							element.addClass('filled');
						} else {
							element.removeClass('filled');
						}
					});
				});
			}
		}
	});