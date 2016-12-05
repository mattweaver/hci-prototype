var app = angular.module('app');

app.directive('search', function(){
    return{
        restrict:'E',
        templateUrl: 'app/directives/search.directive.html',
        controller: function($scope){

        }
    }
});