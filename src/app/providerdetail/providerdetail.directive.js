
(function() {
  'use strict';

  angular
    .module('ponrWeb')
    .directive('providerdetail', providerdetail);

  function providerdetail() {
    return {
      restrict: 'E',
      bindToController: {
        provider: '='
      },
      templateUrl: 'app/providerdetail/providerdetail.html',
      controller: 'ProviderDetailController',
      controllerAs: 'providerDetailCtrl'
    };

  }

})();
