
(function() {
  'use strict';

  angular
    .module('ponrWeb')
    .directive('ngFiles', ['$parse', function ($parse) {

      function fn_link(scope, element, attrs) {
        var onChange = $parse(attrs.ngFiles);
        element.on('change', function (event) {
          scope.$apply(new function (){
            onChange(scope, { $files: event.target.files });
          });
          //onChange(scope, { $files: event.target.files });
        });
      }

      return {
        link: fn_link
      }
    } ]);

})();
