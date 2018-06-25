app.controller('AuthorController', ['$scope', 'authorsFactory', '$routeParams',
 function($scope, authorsFactory, $routeParams) {
    authorsFactory.getAuthors.success(function (data){
        $scope.detail = data.find(element => {
            return element.name === $routeParams.id
        })
    })

    $scope.editAuthor = function() {

    }
}])