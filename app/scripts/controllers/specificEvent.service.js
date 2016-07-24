'use strict';

angular.module('angularTestDeploymentApp')
.service('specificEventService', function($http){
  
  var specificEvent = [];
  this.get = function(id) {
    return $http.get('https://uplift-api.herokuapp.com/events/'+id+'/').success(function(data){
      angular.copy(data, specificEvent);
    });
  };
  // return specificEvent;

});