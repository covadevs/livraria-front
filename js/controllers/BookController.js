app.controller('BookController', BookController)

BookController.$inject = ['$scope', '$routeParams', 'bookFactory']

function BookController($scope, $routeParams, bookFactory) {
    var vm = this;

    vm.books = []
    vm.bookDetail = []

    vm.booksAuthorNotContains = []

    var data = {
        books: vm.books,
        bookDetal: vm.bookDetail,
        booksAuthorNotContains: vm.booksAuthorNotContains
    }

    getBooks()
    getBookDetail()

    async function getBooks() {
        let promise = bookFactory.getBooks().then(function(data){
            vm.books = data
        })

        let result = await promise

        return data.books
    }

    async function getBookDetail() {
        let promise = bookFactory.getBooks().then(function(data){
            vm.bookDetail = data.find(element => {
                return element.id == $routeParams.id
            })
        })

        let result = await promise

        return data.bookDetail
    }

    $scope.addAuthorToBook = function(bookId, index) {
        const authorId = $routeParams.id
        bookFactory.addAuthorToBook(authorId, bookId).then(function(data) {
            console.log(data)
            vm.booksAuthorNotContains.splice(index,1)
        })
    }

    $scope.getBooksAuthorNotContains = function () {
        const authorId = $routeParams.id
        bookFactory.getBooksAuthorNotContains(authorId).then(function(data) {
            vm.booksAuthorNotContains = data
            return data.booksAuthorNotContains
        })
    }
}