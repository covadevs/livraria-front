app.controller('BookController', ['$scope', 'booksFactory', '$routeParams',
 function($scope, booksFactory, $routeParams) {
    booksFactory.getBooks.success(function (data){
        console.log(data)
        console.log($routeParams)
        $scope.books = data
        $scope.bookDetail = data.find(element => {
            return element.id == $routeParams.id
        })
    })
    $scope.editBook = function() {

    }
}])