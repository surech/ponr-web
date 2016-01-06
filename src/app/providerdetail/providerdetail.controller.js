(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('ProviderDetailController', ProviderDetailController);

  ProviderDetailController.$inject = ['$log', 'toastr', '$filter'];

  /** @ngInject */
  function ProviderDetailController($log, toastr, $filter) {
    var vm = this;

    vm.state = '';

    vm.ViewState = {
      VIEW: 1,
      UPLOAD: 2
    };

    activate();

    function activate() {
      vm.state = vm.ViewState.VIEW;
    }

    vm.showUpload = function(){
      vm.state = vm.ViewState.UPLOAD;
    }

    vm.showView = function(){
      vm.state = vm.ViewState.VIEW;
    }
  }
})();
