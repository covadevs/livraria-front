app.controller('HomeController', ['$scope', 'booksFactory', function($scope, booksFactory){
    booksFactory.getBooks.success(function(data) {
        $scope.books = data
    })
}]);