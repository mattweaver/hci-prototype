/**
 * Created by matt on 23/06/2016.
 */
var app = angular.module('app', ['ngRoute', 'ngMaterial', 'ngStorage']);

app.controller('appCtrl', function($scope, $rootScope, $location) {

    $scope.location = $location.$$path;
    $rootScope.navigate = function(route){
        if(route == 'back'){
            $window.history.back();
        }
        else{
            $location.path(route);
            $scope.location = route;
        }
    };

    $scope.menuitems = [
        {index:1, title:"Promotion Products"},
        {index:2, title:"New Products"},
        {index:3, title:"PC Components"},
        {index:4, title:"Peripherals"},
        {index:5, title:"Notebooks"},
        {index:6, title:"Notebook Accessories"},
        {index:7, title:"PC Accessories"},
        {index:8, title:"Mobile Phone"},
        {index:9, title:"Stock Clearance"},
        {index:10, title:"CableList Store"},
        {index:11, title:"Logitech Store"},
        {index:12, title:"Microsoft Store"},
        {index:13, title:"Samsung Store"},
        {index:14, title:"Corsair Store"}

    ]


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
            templateUrl: "app/views/home.view.html",
            controller: "homeCtrl",
            controllerAs: "homeCtrl"
        })
        .otherwise({
            redirectTo: '/'
        })
});