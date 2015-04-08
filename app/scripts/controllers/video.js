'use strict';

/**
 * @ngdoc function
 * @name mwApp.controller:VideoCtrl
 * @description
 * # VideoCtrl
 * Controller of the mwApp
 */
angular.module('mwApp')
  .controller('VideoCtrl', function($scope, $stateParams) {
    $scope.video_id = $stateParams.id
  });