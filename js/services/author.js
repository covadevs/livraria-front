app.factory('authors', ['$http', function($http) {
    return $http.get('http://localhost:8080/authors')
           .success(function(data) {
             return data;
           })
           .error(function(data) {
             return data;
           });
  }]);