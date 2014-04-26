(function(angular) {
  'use strict';

  angular.module('eats', []);

  angular.module('eats').directive('eatClick', function(){
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        element.on('click', function(evt){
          evt.preventDefault();
          evt.stopPropagation();
        });

      }
    }
  });

  angular.module('eats').directive('eatEvents', function(){
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        element.on(attrs.eatEvent || 'click', function(evt){
          evt.preventDefault();
          evt.stopPropagation();
        });

      }
    }
  });

  angular.module('eats').directive('eatBubbles', function(){
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {

        element.on(attrs.eatEvent || 'click', function(evt){
          evt.stopPropagation();
        });

      }
    }
  });

})(window.angular);
