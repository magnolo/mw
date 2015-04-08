'use strict';

/**
 * @ngdoc directive
 * @name mwApp.directive:circled
 * @description
 * # circled
 */
angular.module('mwApp')
	.directive('circled', function() {
		return {
			template: "<canvas></canvas>",
			restrict: 'E',
			replace: true,
			transclude: true,
			scope: {
				width: '=',
				height: '='
			},
			link: function postLink(scope, element, attrs) {
				var canvas = element[0];
				canvas.width = scope.width;
				canvas.height = scope.height;
				var context = canvas.getContext('2d');
				var dot = {
					xPos: scope.width / 2,
					yPos: 0
				}
				context.fillStyle = '#f26425';
				context.strokeStyle = '#f26425';
				context.beginPath();
				context.moveTo(dot.xPos, dot.yPos);
				context.lineTo(dot.xPos * 2, dot.yPos + scope.height / 2);
				context.lineTo(dot.xPos, dot.yPos + scope.height);
				context.lineTo(0, dot.yPos + scope.height / 2);
				context.closePath();
				context.lineWidth = 5;
				context.stroke();
			}
		};
	});