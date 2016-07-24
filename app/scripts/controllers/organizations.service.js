'use strict';

angular.module('angularTestDeploymentApp')
  .service('OrganizationsService', function($http){

  var orgs = [];

  this.getAll = function() {
    return $http.get('https://uplift-api.herokuapp.com/organizations').success(function(data){
      angular.copy(data, orgs);
    });
  };
});