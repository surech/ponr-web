
(function() {
  'use strict';

  angular
    .module('ponrWeb')
    .directive('headerbar', headerbar);

  function headerbar() {
    return {
      restrict: 'E',
      templateUrl: 'app/headerbar/headerbar.html',
      controller: 'HeaderbarController',
      controllerAs: 'headerbarCtrl'
    };

  }

})();
