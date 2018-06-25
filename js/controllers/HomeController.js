app.controller('HomeController', ['$scope', 'authors', function($scope, authors){
    authors.success(function(data) {
        $scope.authors = data;
    });
}]);