app.factory('bookFactory', bookFactory)

bookFactory.$inject = ['$http', '$log']

function bookFactory($http, $log) {
    var services = {
        getBooks: getBooks,
    }

    return services;

    function getBooks(){
        return $http.get('http://localhost:8080/books')
                .then(getBooksComplete)
                .catch(getBooksFailed)

                function getBooksComplete(response) {
                    return response.data
                }

                function getBooksFailed(error) {
                    $log.error('XHR Failed for getBooks.' + error.data)
                }
    }
}