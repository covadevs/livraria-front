app.controller('BookController', ['$scope', 'booksFactory', '$routeParams', function($scope, booksFactory, $routeParams) {
    booksFactory.getBooks.success(function (data){
        $scope.books = data
        $scope.bookDetail = data.find(element => {
            return element.id == $routeParams.id
        })
    })
}])