'use strict';

angular.module('angularTestDeploymentApp')
.service('specificOrgService', function($http){
  
  var specificOrg = [];
  this.get = function(id) {
    return $http.get('https://uplift-api.herokuapp.com/organizations/'+id).success(function(data){
      angular.copy(data, specificOrg);
    });
  };
  // return specificOrg;

});