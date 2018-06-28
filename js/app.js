var app = angular.module('Livraria', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'BookController',
        controllerAs: 'BooksHome',
        templateUrl: 'views/home.html'
    })
    .when('/authors', {
        controller: 'AuthorController',
        controllerAs: 'Authors',
        templateUrl: 'views/authors.html'
    })
    .when('/authors/add', {
        controller: 'AuthorController',
        controllerAs: 'AuthorAdd',
        templateUrl: 'views/add-author.html'
    })
    .when('/books', {
        controller: 'BookController',
        controllerAs: 'Books',
        templateUrl: 'views/books.html'
    })
    .when('/books/add', {
        controller: 'BookController',
        controllerAs: 'BookAdd',
        templateUrl: 'views/add-book.html'
    })
    .when('/authors/:id', {
        controller: 'AuthorController',
        controllerAs: 'Author',
        templateUrl: 'views/author.html'
    })
    .when('/authors/:id/edit', {
        controller: 'AuthorController',
        controllerAs: 'AuthorEdit',
        templateUrl: 'views/edit-author.html'
    })
    .when('/authors/:id/add-to-book', {
        controller: 'BookController',
        controllerAs: 'AuthorsAddToBook',
        templateUrl: 'views/add-to-book-author.html'
    })
    .when('/books/:id', {
        controller: 'BookController',
        controllerAs: 'Book',
        templateUrl: 'views/book.html'
    })
    .when('/books/:id/edit', {
        controller: 'BookController',
        controllerAs: 'BookEdit',
        templateUrl: 'views/edit-book.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});