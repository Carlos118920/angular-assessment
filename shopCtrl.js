angular.module("assessment").controller("shopCtrl", function($scope, shopService){
  $scope.getData = shopService.getData().then(function(response){
      $scope.products = response;
    })

  $scope.switch = true;
})
