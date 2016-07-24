'use strict';

describe('Controller: EventsCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestDeploymentApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('EventsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(EventsCtrl.awesomeThings.length).toBe(3);
  });
});
