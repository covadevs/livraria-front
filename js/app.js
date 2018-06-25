var app = angular.module('Livraria', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        controller: 'HomeController',
        templateUrl: 'views/home.html'
    })
    .when('/authors', {
        controller: 'HomeController',
        templateUrl: 'views/authors.html'
    })
    .when('/authors/:id', {
        controller: 'AuthorController',
        templateUrl: 'views/author.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});