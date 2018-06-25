app.controller('AuthorController', ['$scope', 'authors', '$routeParams',
 function($scope, authors, $routeParams) {
    authors.success(function (data){
        $scope.detail = data[$routeParams.name]
    })
}])