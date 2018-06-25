app.controller('HomeController', ['$scope', 'authorsFactory', function($scope, authorsFactory){
    authorsFactory.getAuthors.success(function(data) {
        $scope.authors = data;
    });
}]);