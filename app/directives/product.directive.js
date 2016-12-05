var app = angular.module('app');

app.directive('product', function(){
    return{
        restrict:'E',
        templateUrl: 'app/directives/product.directive.html',
        controller: function($scope){
            $scope.addToBasket = function(product){
                alert('Added To Basket! \n \n' + product.name)
            }
        }
    }
});