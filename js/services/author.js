app.factory('authorsFactory', ['$http', '$routeParams', function($http, $routeParams) {
    return {
        getAuthors: function() {
                        return $http.get('http://localhost:8080/authors')
                            .success(function(data) {
                              return data;
                            })
                            .error(function(data) {
                              return data;
                            })
                        },
        getAuthorBooks: function(){
                        return $http.get('http://localhost:8080/authors/'+$routeParams.id+'/books')
                            .success(function(data) {
                              return data;
                            })
                            .error(function(data) {
                              return data;
                            })
                        },
        editAuthor: function(author) {
                    return $http.put('http://localhost:8080/authors/'+$routeParams.id, author)
                    .success(function(data){
                        return data;
                    })
                    .error(function(data) {
                        return data;
                    })
        }
    }
  }]);