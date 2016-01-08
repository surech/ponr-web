(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('ProviderDetailController', ProviderDetailController);

  ProviderDetailController.$inject = ['$log', 'toastr', '$http'];

  /** @ngInject */
  function ProviderDetailController($log, toastr, $http) {
    var vm = this;

    // Definiert den Status der QR-Code anzeige
    vm.state = '';

    // Wahr, wenn es beim Upload des QR-Codes ein Fehler gab.
    vm.qrcodeError = false;

    // Hochgeladener Inhalt des QR-Codes
    vm.qrcodeContent = '';

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

    vm.cancelUpload = function () {
      vm.qrcodeError = false;
      vm.qrcodeContent = '';
      vm.state = vm.ViewState.VIEW;
    };

    vm.addFile = function ($files) {
      vm.files = $files;

      var formdata = new FormData();
      formdata.append('qrcode', $files[0]);

      // Anfrage zusammenbauen
      var request = {
        method: 'POST',
        url: 'http://api.poinzofnoreturn.ch/qrcode/scanner',
        data: formdata,
        headers: {
          'Content-Type': undefined
        }
      };

      // Anfrage auslösen
      $http(request).success(function(result){
        vm.qrcodeContent = result.content;
        vm.qrcodeError = false;

        vm.showUpload();
      }).error(function(error){
        vm.qrcodeError = true;
      })
    };

    vm.saveUpload = function(){
      // Speichern
      // TODO

      // Provider anpassen
      // TODO

      // View aktualisieren
      vm.cancelUpload();
    }
  }
})();
