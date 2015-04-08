'use strict';

/**
 * @ngdoc function
 * @name mwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mwApp
 */
angular.module('mwApp')
	.controller('MainCtrl', function($scope, $state, $timeout) {
		$scope.loading = true;
		$scope.goHome = function() {
			$state.go('home');
		};
		$timeout(function() {
			$scope.loading = false;
		});
	});