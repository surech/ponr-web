(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('ProviderDetailController', ProviderDetailController);

  ProviderDetailController.$inject = ['$log', 'toastr', '$filter', '$scope'];

  /** @ngInject */
  function ProviderDetailController($log, toastr, $filter, $scope) {
    var vm = this;

    vm.state = '';

    vm.formdata = new FormData();

    vm.ViewState = {
      VIEW: 1,
      UPLOAD: 2
    };

    activate();

    function activate() {
      vm.state = vm.ViewState.VIEW;
    }

    vm.showUpload = function () {
      vm.state = vm.ViewState.UPLOAD;
    };

    vm.showView = function () {
      vm.state = vm.ViewState.VIEW;
    };

    vm.addFile = function ($files) {
      vm.files = $files;
      console.log($files);
    };
  }
})();
