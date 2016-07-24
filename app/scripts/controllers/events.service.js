'use strict';

angular.module('angularTestDeploymentApp')
  .service('EventsService', function($http){

  var events = [];
  this.getAll = function() {
    return $http.get('https://uplift-api.herokuapp.com/events').success(function(data){
        angular.copy(data, events);
    });
  };
  // return events;

});