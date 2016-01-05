(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('ProviderDetailController', ProviderDetailController);

  ProviderDetailController.$inject = ['$log', 'toastr', '$filter'];

  /** @ngInject */
  function ProviderDetailController($log, toastr, $filter) {
    var vm = this;

    vm.providers = [];

    activate();

    function activate() {
    }
  }
})();
