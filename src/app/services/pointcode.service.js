(function () {
  'use strict';

  angular.module('ponrWeb')
    .factory('pointcodeService', pointcodeService);

  pointcodeService.$inject = ['$resource', 'REST_END_POINT'];

  function pointcodeService($resource, REST_END_POINT) {
    return $resource(REST_END_POINT + '/pointcode', {}, {
      query: {method: 'GET' },
      create: {method: 'POST' }
    });
  }
})();
