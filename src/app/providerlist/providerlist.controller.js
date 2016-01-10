(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('ProviderListController', ProviderListController);

  ProviderListController.$inject = ['$log', 'toastr', '$filter', 'providerService'];

  /** @ngInject */
  function ProviderListController($log, toastr, $filter, providerService) {
    var vm = this;

    vm.loadAll = false;

    vm.providers = [];

    activate();

    function activate() {
      loadProviders();
    }

    function loadProviders(){
      if(vm.loadAll) {
        vm.providers = providerService.query();
      } else {
        vm.providers = providerService.queryWithCodes();
      }
    }
    
    vm.toggleLoad = function(){
      vm.loadAll = !vm.loadAll;
      loadProviders();
    }
  }
})();
