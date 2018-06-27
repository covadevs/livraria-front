app.controller('AuthorController', AuthorController)

AuthorController.$inject = ['$scope', 'authorFactory', '$routeParams', '$location']

function AuthorController($scope, authorFactory, $routeParams, $location) {
    var vm = this;

    vm.authors = []
    vm.authorDetail = []
    vm.authorBooks = []

    vm.booksAuthorNotContains = []
    
    vm.authorName = ""
    
    vm.authorNew = {
        name: ""
    }
    
    getAuthors()
    getAuthorBooks()
    getAuthorDetail()
    
    var data = {
        authors: vm.authors,
        authorDetail: vm.authorDetail,
        authorBooks: vm.authorBooks,
        authorNew: vm.authorNew,
        booksAuthorNotContains: vm.booksAuthorNotContains,
    };

    async function getAuthorDetail() {
        let promise = authorFactory.getAuthors().then(function(data){
                vm.authorDetail = data.find(element => {
                return element.id == $routeParams.id
            })
        })

        let result = await promise
        return data.authorDetail
    }

    async function getAuthorBooks() {
        let promise = authorFactory.getAuthorBooks().then(function(data) {
            vm.authorBooks = data;
        })

        let result = await promise

        return data.authorBooks
    }

    async function getAuthors() {
        let promise = authorFactory.getAuthors().then(function(data) {
            vm.authors = data;
        });

        let result = await promise

        return data.authors
    }

    $scope.goAddAuthor = function() {
        $location.url("/authors/add")
    }

    $scope.goAddAuthorToBook = function(authorId) {
        $location.url("/authors/"+authorId+"/add-to-book")
    }

    $scope.addAuthor = function(authorData) {
        authorFactory.addAuthor(authorData).then(function(data) {
            $location.url("/authors")
        })
    }

    $scope.editAuthor = function (authorName) {
        vm.authorDetail.name = authorName
        authorFactory.editAuthor(vm.authorDetail).then(function(data) {
            $location.url("/authors")
        });
    }

    $scope.goAuthorEdit = function (authorId) {
        $location.url("/authors/"+authorId+"/edit")
    }

    $scope.removeAuthor = function(authorId, index) {
        authorFactory.removeAuthor(authorId).then(function(data) {
            vm.authors.splice(index, 1)
        })
    }

    $scope.removeAuthorFromBook = function(authorId, bookId, index) {
        authorFactory.removeAuthorFromBook(authorId, bookId).then(function(data) {
            vm.authorBooks.splice(index, 1)
        })
    }
}