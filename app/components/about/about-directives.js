app.directive("myDirective", function () {
   return {
      restrict: "E",
      transclude: true,
      controller: 'aboutController',
      template: "<div style='background-color:red'>Directive {{message}}</div>",
   };
});