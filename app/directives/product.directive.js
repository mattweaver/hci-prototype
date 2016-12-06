var app = angular.module('app');

app.directive('product', function(){
    return{
        restrict:'E',
        templateUrl: 'app/directives/product.directive.html',
        controller: function($scope, $mdDialog){
            $scope.addToBasket = function(product){
                alert('Added To Basket! \n \n' + product.name)
            };

            $scope.showProductDialog = function(product) {
                $mdDialog.show({
                    controller: 'productDialog',
                    templateUrl: './app/dialogs/product.dialog.html',
                    parent: angular.element(document.body),
                    clickOutsideToClose:true,
                    locals: {
                        product: product
                    }
                })
                .then(function(answer) {
                    $scope.status = 'You said the information was "' + answer + '".';
                }, function() {
                    $scope.status = 'You cancelled the dialog.';
                });
            };

        }
    }
});