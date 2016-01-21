
(function() {
  'use strict';

  angular
    .module('ponrWeb')
    .directive('paginator', paginator);

  function paginator() {
    return {
      restrict: 'AE',
      scope: {
        pageInformation: '=',
        loadPage: '&'
      },
      templateUrl: 'app/paginator/paginator.html',
      controller: 'PaginatorController',
      controllerAs: 'paginatorCtrl'
    };

  }

})();
