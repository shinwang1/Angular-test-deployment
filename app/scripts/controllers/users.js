'use strict';

angular.module('angularTestDeploymentApp')
  .controller('UsersCtrl',['$scope', 'UsersService', 

    function ($scope, UsersService) {

    UsersService.getAll().then(function(data){
      $scope.user = data.data[0]; //currently displaying one user
    });
}]);