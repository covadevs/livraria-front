app.factory('books', ['$http', function($http) {
    return $http.get('http://localhost:8080/books')
            .success(data => {
                return data;
            })
            .error(data => {
                return data;
            })
}])