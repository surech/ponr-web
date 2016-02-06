(function () {
  'use strict';

  angular.module('ponrWeb')
    .factory('userService', userService);

  userService.$inject = ['$resource', 'REST_END_POINT'];

  function userService($resource, REST_END_POINT) {
    return $resource(REST_END_POINT + '/user', {}, {
      query: {method: 'GET', withCredentials: true }
    });
  }
})();
