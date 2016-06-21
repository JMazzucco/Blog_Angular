app.directive("myDirective", function () {
   return {
      restrict: "E",
      transclude: true,
      controller: 'aboutController',
      templateUrl: "app/components/about/about-directive-template.html",
   };
});