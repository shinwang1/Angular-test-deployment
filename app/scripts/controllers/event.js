'use strict';

/**
 * @ngdoc function
 * @name angularTestDeploymentApp.controller:EventCtrl
 * @description
 * # EventCtrl
 * Controller of the angularTestDeploymentApp
 */
angular.module('angularTestDeploymentApp')
  .controller('EventsCtrl',['$scope', '$route', 'EventsService', 

    function ($scope, $route, EventsService) {
      EventsService.getAll().then(function(data){
        $scope.events = data.data;
    });
}]);