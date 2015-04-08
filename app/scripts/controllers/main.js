'use strict';

/**
 * @ngdoc function
 * @name mwApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mwApp
 */
angular.module('mwApp')
  .controller('MainCtrl', function($scope, $state, $timeout, $window) {
    $scope.loading = true;
    $scope.goHome = function() {
      $state.go('home');
    };
    $scope.goBack = function() {
      $window.history.back();
    };
    $timeout(function() {
      $scope.loading = false;
    });
  });