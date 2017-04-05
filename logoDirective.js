angular.module("assessment").directive("logo", function(){
  return {
    restrict: "E",
    templateUrl: "views/logo.html",
    link: function(scope, element, attributes){
      element.css("position", "absolute");
      element.css("top", "60px");
      element.css("right", "80px");
    }
  }
})
