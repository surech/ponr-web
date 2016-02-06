(function () {
  'use strict';

  angular.module('ponrWeb')
    .factory('logoutService', logoutService);

  logoutService.$inject = ['$resource', 'REST_END_POINT'];

  function logoutService($resource, REST_END_POINT) {
    return $resource(REST_END_POINT + '/logout', {}, {
      logout: {method: 'POST', withCredentials: true }
    });
  }
})();
