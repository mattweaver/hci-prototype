/**
 * Created by matt on 23/06/2016.
 */
var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngAnimate', 'ksSwiper']);

app.controller('appCtrl', function($scope, $rootScope, $location, menuitems) {

    $scope.location = $location.$$path;
    $rootScope.navigate = function(route){
        if(route == 'back')
            $window.history.back();
        else{
            $location.path(route);
            $scope.location = route;

        }
    };

    $scope.menuitems = menuitems;

});

app.config(function($routeProvider, $httpProvider,$mdThemingProvider) {

    $mdThemingProvider.theme('default')
        .primaryPalette('red', {
            'default': '900', // by default use shade 400 from the pink palette for primary intentions
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        })
        // If you specify less than all of the keys, it will inherit from the
        // default shades
        .accentPalette('grey', {
            'default': '800',
            'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
            'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
            'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
        });

    // Configure CORS
    $httpProvider.defaults.useXDomain = true;
    //$httpProvider.defaults.withCredentials = true;
    delete $httpProvider.defaults.headers.common["X-Requested-With"];
    $httpProvider.defaults.headers.common["Accept"] = "application/json";
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json";

    $routeProvider
        .when('/', {
            templateUrl: "app/views/home.view.html", controller: "homeCtrl", controllerAs: "homeCtrl"
        })
        .when('/promotion-products', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"promotion-products"})
        .when('/new-products', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"new-products"})
        .when('/pc-components', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"pc-components"})
        .when('/peripherals', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"peripherals"})
        .when('/notebooks', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"notebooks"})
        .when('/notebook-accessories', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"notebook-accessories"})
        .when('/pc-accessories', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"pc-accessories"})
        .when('/mobile-phone', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"mobile-phone"})
        .when('/stock-clearance', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"stock-clearance"})
        .when('/cableist-store', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"cableist-store"})
        .when('/logitech-store', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"logitech-store"})
        .when('/microsoft-store', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"microsoft-store"})
        .when('/samsung-store', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"promotion-products"})
        .when('/corsair-store', {templateUrl: "app/views/products.view.html", controller: "productsCtrl", controllerAs: "productsCtrl", pageName:"corsair-store"})
        .otherwise({
            redirectTo: '/'
        })
});