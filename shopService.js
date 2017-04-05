angular.module("assessment").service("shopService", function($http){
  this.getData = function(){
    return $http.get("http://practiceapi.devmounta.in/products").then(function(response){
      return response.data;
    })
  }
})
