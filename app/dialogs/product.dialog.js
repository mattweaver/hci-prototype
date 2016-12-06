var app = angular.module('app');

app.controller('productDialog', function($scope, product,$mdDialog) {
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.product = product;

    $scope.addToBasket = function(product){
        alert('Added To Basket! \n \n' + product.name)
    };
});