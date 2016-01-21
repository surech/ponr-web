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

    vm.pageInformation = {};

    function activate() {
      vm.loadProviders();
    }

    vm.loadProviders = function (pageNumber) {

      pageNumber = pageNumber ? pageNumber : 0;

      if (vm.loadAll) {
        vm.providers = providerService.query({size: '12', page: pageNumber});
      } else {
        vm.providers = providerService.queryWithCodes({size: '12', page: pageNumber});
      }

      vm.providers.$promise.then(onProviderLoaded);
    };

    function onProviderLoaded(response){
      vm.pageInformation = response.page;
    }

    vm.toggleLoad = function(){
      vm.loadAll = !vm.loadAll;
      vm.loadProviders();
    }

    activate();
  }
})();
