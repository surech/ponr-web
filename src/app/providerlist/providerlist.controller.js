(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('ProviderListController', ProviderListController);

  ProviderListController.$inject = ['$log', 'toastr', '$filter', 'providerService'];

  /** @ngInject */
  function ProviderListController($log, toastr, $filter, providerService) {
    var vm = this;

    vm.providers = [];

    activate();

    function activate() {
      vm.providers = providerService.query();
    }
  }
})();
