app.controller('AuthorController', AuthorController)

AuthorController.$inject = ['$scope', 'authorFactory', '$routeParams', '$location']

function AuthorController($scope, authorFactory, $routeParams, $location) {
    var vm = this;

    vm.authors = []
    vm.authorDetail = []
    vm.authorBooks = []

    getAuthors()
    getAuthorBooks()
    getAuthorDetail()
    
    var data = {
        authors: vm.authors,
        authorDetail: vm.authorDetail,
        authorBooks: vm.authorBooks
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
            console.log(vm.authors)
        });

        let result = await promise

        return data.authors
    }

    function editAuthor(authorName) {
        vm.authorDetail.name = authorName
        authorFactory.editAuthor(vm.authorDetail).success(function(data) {
            console.log("info: "+data)
        });
    }

    function goAuthorEdit(authorId) {
        $location.url("/authors/"+authorId+"/edit")
    }
}