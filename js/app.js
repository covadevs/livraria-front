var app = angular.module('Livraria', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })
    .when('/authors', {
        controller: 'AuthorController',
        templateUrl: 'views/authors.html'
    })
    .when('/authors/:id', {
        controller: 'AuthorController',
        templateUrl: 'views/author.html'
    })
    .when('/authors/:id/edit', {
        controller: 'AuthorController',
        templateUrl: 'views/edit-author.html'
    })
    .when('/books', {
        controller: 'BookController',
        templateUrl: 'views/books.html'
    })
    .when('/books/:id', {
        controller: 'BookController',
        templateUrl: 'views/book.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});