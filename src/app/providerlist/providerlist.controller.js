(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('ProviderListController', ProviderListController);

  ProviderListController.$inject = ['providerService'];

  /** @ngInject */
  function ProviderListController(providerService) {
    var vm = this;

    vm.loadAll = false;

    vm.providers = [];

    vm.pageInformation = {};

    vm.sortBy = "name";

    function activate() {
      vm.loadProviders();
    }

    vm.loadProviders = function (pageNumber) {

      pageNumber = pageNumber ? pageNumber : 0;

      // Parameter für die Suche zusammenstellen
      var searchParams = {size: '12', page: pageNumber, sort: vm.sortBy};

      if (vm.loadAll) {
        vm.providers = providerService.query(searchParams);
      } else {
        vm.providers = providerService.queryWithCodes(searchParams);
      }

      vm.providers.$promise.then(onProviderLoaded);
    };

    function onProviderLoaded(response){
      vm.pageInformation = response.page;
    }

    vm.toggleLoad = function () {
      vm.loadAll = !vm.loadAll;
      vm.loadProviders();
    };

    activate();
  }
})();
