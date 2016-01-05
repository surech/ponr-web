
(function() {
  'use strict';

  angular
    .module('ponrWeb')
    .directive('providerdetail', providerdetail);

  function providerdetail() {
    return {
      restrict: 'E',
      templateUrl: 'app/providerlist/providerdetail.html',
      controller: 'ProviderDetailController',
      controllerAs: 'providerDetailCtrl'
    };

  }

})();
