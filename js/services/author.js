app.factory('authorsFactory', ['$http', function($http) {
    return {
          getAuthors: $http.get('http://localhost:8080/authors')
                        .success(function(data) {
                          return data;
                        })
                        .error(function(data) {
                          return data;
                        })
          
    }
  }]);