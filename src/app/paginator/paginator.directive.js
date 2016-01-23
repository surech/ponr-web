
(function() {
  'use strict';

  angular
    .module('ponrWeb')
    .directive('paginator', paginator);

  function paginator() {
    return {
      restrict: 'AE',
      bindToController: {
        pageInformation: '=',
        loadPage: '&'
      },
      templateUrl: 'app/paginator/paginator.html',
      controller: 'PaginatorController',
      controllerAs: 'paginatorCtrl'
    };

  }

})();
