'use strict';

angular.module('angularTestDeploymentApp')
  .controller('specificOrgCtrl',['$scope', '$route', '$routeParams', 'specificOrgService',

    function ($scope, $route, $routeParams, specificOrgService) {

    specificOrgService.get($routeParams.id).then(function(data){
      $scope.org = data.data;
    });
}]);