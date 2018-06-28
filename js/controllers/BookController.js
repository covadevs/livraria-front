app.controller('BookController', BookController)

BookController.$inject = ['$scope', '$routeParams', 'bookFactory', '$location', 'authorFactory']

function BookController($scope, $routeParams, bookFactory, $location, authorFactory) {
    var vm = this;

    vm.books = []
    vm.bookDetail = []

    vm.booksAuthorNotContains = []
    vm.authorDetail = []

    vm.newBook = {
        title: '',
        description: ''
    }

    var data = {
        books: vm.books,
        bookDetal: vm.bookDetail,
        booksAuthorNotContains: vm.booksAuthorNotContains,
        newBook: vm.newBook,
        authorDetail: vm.authorDetail
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

    $scope.getBooksAuthorNotContains = async function () {
        const authorId = $routeParams.id
        let promise1 = bookFactory.getBooksAuthorNotContains(authorId).then(function(data) {
            vm.booksAuthorNotContains = data
        })

        let result1 = await promise1

        let promise2 = authorFactory.getAuthor(authorId).then(function(data) {
            vm.authorDetail = data
            console.log(vm.authorDetail)
        })

        let result2 = await promise2

        return data
    }

    $scope.goAddBook = function() {
        $location.url('/books/add')
    }

    $scope.goEditBook = function(bookId) {
        $location.url('/books/'+bookId+'/edit')
    }

    $scope.editBook = function(book) {
        bookFactory.editBook(book).then(function(data) {
            console.log(data)
            if(data.message == 'book exists') {
                alert("Book exists!")
            } else {
                $location.url("/books")
            }
        })
    }

    $scope.addBook = function(book) {
        bookFactory.addBook(book).then(function(data) {
            if(data.message == 'book exists') {
                alert("Book exists!")
            } else {
                $location.url("/books")
            }
        })
    }

    $scope.removeBook = function(bookId, index) {
        bookFactory.removeBook(bookId).then(function(data){
            vm.books.splice(index, 1)
        })
    }
}