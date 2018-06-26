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
    .when('/authors/:id', {
        controller: 'AuthorController',
        controllerAs: 'Author',
        templateUrl: 'views/author.html'
    })
    .when('/authors/:id/edit', {
        controller: 'AuthorController',
        templateUrl: 'views/edit-author.html'
    })
    .when('/books', {
        controller: 'BookController',
        controllerAs: 'Books',
        templateUrl: 'views/books.html'
    })
    .when('/books/:id', {
        controller: 'BookController',
        controllerAs: 'Book',
        templateUrl: 'views/book.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});