(function () {
  'use strict';

  angular.module('ponrWeb')
    .factory('pointcodeService', pointcodeService);

  pointcodeService.$inject = ['$resource'];

  function pointcodeService($resource) {
    return $resource('http://api.poinzofnoreturn.ch/pointcode', {}, {
      query: {method: 'GET' },
      create: {method: 'POST' }
    });
  }
})();
