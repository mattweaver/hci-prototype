var app = angular.module('app');

app.directive('filter', function(){
    return{
        restrict:'E',
        templateUrl: 'app/directives/filter.directive.html',
        controller: function($scope){
            $scope.resetFilters = function(){
                $scope.filters = {
                    ram1: '',
                    ram2: '',
                    ram3: '',
                    ram4: '',
                    ram5: '',
                    ram6: '',
                    brand1: '',
                    brand2: '',
                    brand3: '',
                    brand4: '',
                    screen1: '',
                    screen2: '',
                    screen3: '',
                    screen4: ''

                }
            }

        }
    }
});