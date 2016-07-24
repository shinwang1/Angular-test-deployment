'use strict';

angular.module('angularTestDeploymentApp')
  .controller('specificEventCtrl',['$scope', '$route', '$routeParams', 'specificEventService',

    function ($scope, $route, $routeParams, specificEventService) {

        specificEventService.get($routeParams.id).then(function(data){
          $scope.event = data.data;
        });

    }

]);