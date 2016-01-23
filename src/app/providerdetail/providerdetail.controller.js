(function () {
  'use strict';

  angular
    .module('ponrWeb')
    .controller('ProviderDetailController', ProviderDetailController);

  ProviderDetailController.$inject = ['$log', 'toastr', '$http', '$scope', 'pointcodeService'];

  /** @ngInject */
  function ProviderDetailController($log, toastr, $http, $scope, pointcodeService) {
    var vm = this;

    // Definiert den Status der QR-Code anzeige
    vm.state = '';

    // Wahr, wenn es beim Upload des QR-Codes ein Fehler gab.
    vm.qrcodeError = false;

    // Hochgeladener Inhalt des QR-Codes
    vm.qrcodeContent = '';

    // Wahr, wenn ein Upload im Gang ist
    vm.uploadRunning = false;

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
      vm.uploadRunning = true;

      $http(request).success(function(result){
        vm.qrcodeContent = result.content;
        vm.qrcodeError = false;
        vm.uploadRunning = false;

        vm.showUpload();
      }).error(function(error){
        vm.uploadRunning = false;
        vm.qrcodeError = true;
      })
    };

    vm.saveUpload = function(){
      // Speichern
      var code = {
        content: vm.qrcodeContent,
        provider: vm.provider._links.self.href
      };
      pointcodeService.create(code);

      // Provider anpassen
      vm.provider.pointcodes.push(code);

      // View aktualisieren
      vm.cancelUpload();
    }
  }
})();
