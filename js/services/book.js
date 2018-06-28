app.factory('bookFactory', bookFactory)

bookFactory.$inject = ['$http', '$log', '$routeParams']

function bookFactory($http, $log, $routeParams) {
    const URL_API = "http://localhost:8080";
    var services = {
        getBooks: getBooks,
        addAuthorToBook: addAuthorToBook,
        getBooksAuthorNotContains: getBooksAuthorNotContains,
        addBook: addBook,
        removeBook: removeBook,
        editBook: editBook        
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

      function addBook(book) {
        return $http.post(URL_API+'/books', book)
                .then(addBookComplete)
                .catch(addBookFailed)

                function addBookComplete(response) {
                  return response.data
                }

                function addBookFailed(error) {
                  $log.error('XHR Failed for addBook.' + error.data)
                }
      }

      function removeBook(bookId) {
        return $http.delete(URL_API+'/books/'+bookId)
                .then(removeBookComplete)
                .catch(removeBookFailed)

                function removeBookComplete(response) {
                  return response.data
                }

                function removeBookFailed(error) {
                  $log.error('XHR Failed for removeBook.' + error.data)
                }
      }

      function editBook(book) {
        const bookId = $routeParams.id
        return $http.put(URL_API+'/books/'+bookId, book)
                .then(editBookComplete)
                .catch(editBookFailed)

                function editBookComplete(response) {
                  return response.data
                }

                function editBookFailed(error) {
                  $log.error('XHR Failed for editBook.' + error.data)
                }
      }
}