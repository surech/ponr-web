
(function() {
  'use strict';

  angular
    .module('ponrWeb')
    .directive('providerlist', providerlist);

  function providerlist() {
    return {
      restrict: 'E',
      templateUrl: 'app/providerlist/providerlist.html',
      controller: 'ProviderListController',
      controllerAs: 'providerListCtrl'
    };

  }

})();
