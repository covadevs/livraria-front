app.factory('booksFactory', ['$http', function($http) {
    return {
        getBooks: $http.get('http://localhost:8080/books')
                    .success(data => {
                        return data;
                    })
                    .error(data => {
                        return data;
                    })
    }
}])