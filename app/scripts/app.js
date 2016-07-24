'use strict';

/**
 * @ngdoc overview
 * @name angularTestDeploymentApp
 * @description
 * # angularTestDeploymentApp
 *
 * Main module of the application.
 */
angular
  .module('angularTestDeploymentApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/event.html',
        controller: 'EventsCtrl',
        controllerAs: 'event'
      })
      .when('/events/:id', {
        templateUrl: 'views/specificEvent.html',
        controller: 'specificEventCtrl',
        controllerAs: 'event'
      })
      .when('/organizations', {
        templateUrl: 'views/organizations.html',
        controller: 'OrganizationsCtrl',
        controllerAs: 'organizations'
      })
      .when('/organizations/:id', {
        templateUrl: 'views/specificOrg.html',
        controller: 'specificOrgCtrl',
        controllerAs: 'org'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
