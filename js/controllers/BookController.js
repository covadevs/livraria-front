app.controller('BookController', BookController)

BookController.$inject = ['$scope', '$routeParams', 'bookFactory']

function BookController($scope, $routeParams, bookFactory) {
    var vm = this;

    vm.books = []
    vm.bookDetail = []

    var data = {
        books: vm.books,
        bookDetal: vm.bookDetail
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
}