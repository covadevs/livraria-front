app.controller('AuthorController', ['$scope', 'authorsFactory', '$routeParams', '$location', function($scope, authorsFactory, $routeParams, $location) {
    authorsFactory.getAuthors().success(function (data){
        $scope.authorDetail = data.find(element => {
            return element.id == $routeParams.id
        })
    })

    authorsFactory.getAuthorBooks().success(function(data) {
        $scope.authorBooks = data;
    })

    authorsFactory.getAuthors().success(function(data) {
        $scope.authors = data;
    });

    $scope.editAuthor = function(authorName) {
        $scope.authorDetail.name = authorName
        authorsFactory.editAuthor($scope.authorDetail).success(function(data) {
            console.log("info: "+data)
        });
    }

    $scope.goAuthorEdit = function(authorId) {
        $location.url("/authors/"+authorId+"/edit")
    };
}])