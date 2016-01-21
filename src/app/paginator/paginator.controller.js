(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('PaginatorController', PaginatorController);

  PaginatorController.$inject = ['$scope'];

  /** @ngInject */
  function PaginatorController($scope) {
    var vm = this;

    vm.pages = [];

    // Gibt an, ob die Navigations-Buttons aktiviert werden sollen
    vm.showPrev = false;
    vm.showNext = false;

    vm.currentPage = 0;

    activate();

    function activate() {
      // Änderungen überwachen
      $scope.$watch('pageInformation', onPageInformationChanged)
    }

    function onPageInformationChanged(pageInformation){
      vm.pages = [];
      if(!pageInformation){
        return;
      }

      for(var p = 0; p < pageInformation.totalPages; p++) {
        var page = {
          text: p+1,
          selected: p == pageInformation.number,
          page: p
        };

        vm.pages.push(page);
      }

      // Buttons überprüfen
      vm.showPrev = pageInformation.number !== 0;
      vm.showNext = pageInformation.number !== (pageInformation.totalPages - 1);
      vm.currentPage = pageInformation.number;
    }

    vm.changePage = function (pageNumber) {
      $scope.loadPage({'pageNumber': pageNumber});
    };

    vm.gotoNext = function () {
      vm.changePage(vm.currentPage + 1);
    };

    vm.gotoPrev = function () {
      vm.changePage(vm.currentPage - 1);
    };
  }
})();
