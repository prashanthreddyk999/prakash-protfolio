var app = angular.module('myApp', ['ngRoute']);
app.controller('myCtrl', ['$scope', 'myFactory', function ($scope, myFactory) {
    myFactory.success(function (data) {
        $scope.potos = data;

    });
}]);

app.controller('photoDetail', ['$scope', 'myFactory', '$routeParams', function ($scope, myFactory, $routeParams) {
    myFactory.success(function (data) {
        $scope.detail = data[$routeParams.photoIndex];

        console.log($scope.detail);
    });
}]);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'myCtrl',
            templateUrl: 'angularpics.html'
        })
        .when('/photos/:photoIndex', {
            controller: 'photoDetail',
            templateUrl: 'photodetail.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.factory('myFactory', ['$http', function ($http) {
    return $http.get('picturesData.json')
        .success(function (data) {
            return data;
        })
        .error(function (data) {
            return data;
        });
}]);