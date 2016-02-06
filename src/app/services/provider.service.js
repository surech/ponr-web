(function () {
  'use strict';

  angular.module('ponrWeb')
    .factory('providerService', providerService);

  providerService.$inject = ['$resource', 'REST_END_POINT'];

  function providerService($resource, REST_END_POINT) {
    return $resource(REST_END_POINT + '/provider', {}, {
      query: {method: 'GET' },
      create: {method: 'POST' },
      queryWithCodes: {method: 'GET', url: REST_END_POINT + '/provider/search/onlyWithCodes'},
      queryFulltext: {method: 'GET', url: REST_END_POINT + '/provider/search/fulltext'},
      queryFulltextWithCodes: {method: 'GET', url: REST_END_POINT +'/provider/search/fulltextWithCodes'}
    });
  }
})();
