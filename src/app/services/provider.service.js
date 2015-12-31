(function () {
  'use strict';

  angular.module('ponrWeb')
    .factory('providerService', providerService);

  providerService.$inject = ['$resource'];

  function providerService($resource) {
    return $resource('http://api.poinzofnoreturn.ch/provider', {}, {
      query: {method: 'GET' },
      create: {method: 'POST' }
    });
  }
})();
