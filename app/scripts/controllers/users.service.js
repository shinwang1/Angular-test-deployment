'use strict';

angular.module('angularTestDeploymentApp')
.service('UsersService', function($http){

  var users = [];

  this.getAll = function() {
    return $http.get('https://uplift-api.herokuapp.com/users').success(function(data){
      angular.copy(data, users);
    });
  };
});