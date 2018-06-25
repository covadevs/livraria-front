app.controller('AuthorController', ['$scope', 'authorsFactory', '$routeParams',
 function($scope, authorsFactory, $routeParams) {
    authorsFactory.getAuthors.success(function (data){
        $scope.authorDetail = data.find(element => {
            return element.name == $routeParams.id
        })
    })

    authorsFactory.getAuthorBooks($routeParams.id).success(function(data) {
        $scope.authorBooks = data;
    })
    $scope.editAuthor = function() {

    }
}])