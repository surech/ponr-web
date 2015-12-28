(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('ProviderListController', ProviderListController);

  ProviderListController.$inject = ['$log', 'toastr', '$filter'];

  /** @ngInject */
  function ProviderListController($log, toastr, $filter) {
    var vm = this;
    vm.text = '';
    activate();

    function activate() {
      vm.text = "Manor";
    }
  }
})();
