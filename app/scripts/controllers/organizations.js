'use strict';

angular.module('angularTestDeploymentApp')
  .controller('OrganizationsCtrl',['$scope', 'OrganizationsService', 

    function ($scope, OrganizationsService) {
      OrganizationsService.getAll().then(function(data){
      $scope.organizations = data.data;
    });

}]);