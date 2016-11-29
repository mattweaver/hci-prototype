var app = angular.module('app');

app.controller('productsCtrl', function($scope, $rootScope, $route, products) {
    $scope.products = products;
    $scope.pageName = $route.current.$$route.pageName;
});