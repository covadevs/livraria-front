app.factory('bookFactory', bookFactory)

bookFactory.$inject = ['$http', '$log']

function bookFactory($http, $log) {
    const URL_API = "http://localhost:8080";
    var services = {
        getBooks: getBooks,
        addAuthorToBook: addAuthorToBook,
        getBooksAuthorNotContains: getBooksAuthorNotContains
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

    function addAuthorToBook(authorId, bookId) {
        return $http.post(URL_API+'/books/'+bookId+'/authors?authorId='+authorId)
                .then(addAuthorToBookComplete)
                .catch(addAuthorToBookFailed)
    
                function addAuthorToBookComplete(response) {
                  return response.data
                }
    
                function addAuthorToBookFailed(error) {
                  $log.error('XHR Failed for addAuthorToBook.' + error)
                }
      }

      function getBooksAuthorNotContains(authorId) {
        return $http.get(URL_API+'/authors/books?authorId='+authorId) 
                .then(getBooksAuthorNotContainsComplete)
                .catch(getBooksAuthorNotContainsFailed)
    
                function getBooksAuthorNotContainsComplete(response) {
                  return response.data
                }
    
                function getBooksAuthorNotContainsFailed(error) {
                  $log.error('XHR Failed for getBooksAuthorNotContains.' + error.data)
                }
      }
}