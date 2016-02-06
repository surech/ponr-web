(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('HeaderbarController', HeaderbarController);

  HeaderbarController.$inject = ['userService', 'logoutService', 'REST_END_POINT', '$location'];

  /** @ngInject */
  function HeaderbarController(userService, logoutService, REST_END_POINT, $location) {
    var vm = this;

    vm.loginUrl = REST_END_POINT + "/login";

    vm.authenticated = false;

    vm.username = "n/a";

    function activate() {
      // Daten laden
      checkLogin();
    }

    function checkLogin(){
      userService.query().$promise.then(onUserLoadedSuccess, onUserLoadedFailed);
    }

    function onUserLoadedSuccess(data){
      vm.authenticated = true;
      vm.username = data.userAuthentication.details.name;
    }

    function onUserLoadedFailed() {
      vm.authenticated = false;
      vm.username = "n/a";
    }

    vm.logout = function () {
      logoutService.logout().$promise.then(function () {
        vm.authenticated = false;
        $location.path("/");
      }, function (err) {
        console.log("Fehler beim Logout: " + err);
        vm.authenticated = false;
      })
    };

    activate();
  }
})();
