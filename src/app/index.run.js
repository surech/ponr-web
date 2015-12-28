(function() {
  'use strict';

  angular
    .module('ponrWeb')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
