app.factory('authorFactory', authorFactory)

authorFactory.$inject = ['$http', '$routeParams', '$log']

function authorFactory($http, $routeParams, $log) {
  const URL_API = "http://localhost:8080";

  var services = {
      getAuthor             :getAuthor,
      getAuthors            : getAuthors,
      getAuthorBooks        : getAuthorBooks,
      editAuthor            : editAuthor,
      removeAuthor          : removeAuthor,
      addAuthor             : addAuthor,
      removeAuthorFromBook  : removeAuthorFromBook,
      addAuthorToBook       : addAuthorToBook,
  };

  return services;

  function getAuthors() {
    return $http.get(URL_API+'/authors')
          .then(getAuthorsComplete)
          .catch(getAuthorsFailed)

          function getAuthorsComplete(response) {
            return response.data;
          }

          function getAuthorsFailed(error) {
            $log.error('XHR Failed for getAuthors.' + error.data);
          }
  }

  function getAuthor(authorId) {
    return $http.get(URL_API+'/authors/'+authorId)
            .then(getAuthorComplete)
            .catch(getAuthorFailed)

            function getAuthorComplete(response) {
              return response.data;
            }

            function getAuthorFailed(error) {
              $log.error('XHR Failed for getAuthor.' + error.data);
            }
  }

  function getAuthorBooks() {
    const authorId = $routeParams.id
    return  $http.get(URL_API+'/authors/'+authorId+'/books')
            .then(getAuthorBooksComplete)
            .catch(getAuthorBooksFailed)

            function getAuthorBooksComplete(response) {
              return response.data;
            }

            function getAuthorBooksFailed(error) {
              $log.error('XHR Failed for getAuthorBooks.' + error.data);
            }
  }

  function addAuthor(authorData) {
    return $http.post(URL_API+'/authors', authorData)
            .then(addAuthorComplete)
            .catch(addAuthorFailed)

            function addAuthorComplete(response) {
              return response.data
            }

            function addAuthorFailed(error) {
              $log.error('XHR Failed for addAuthor' + error.data)
            }
  }

  function editAuthor(authorData) {
    const authorId = $routeParams.id
    return $http.put(URL_API+'/authors/'+authorId, authorData)
            .then(editAuthorComplete)
            .catch(editAuthorFailed)

            function editAuthorComplete(response) {
              return response.data
            }

            function editAuthorFailed(error) {
              $log.error('XHR Failed for editAuthor.'+error.data)
            }
  }

  function removeAuthor(authorId) {
    return $http.delete(URL_API+'/authors/'+authorId)
            .then(removeAuthorComplete)
            .catch(removeAuthorFailed)

            function removeAuthorComplete(response) {
              return response.data
            }

            function removeAuthorFailed(error) {
              $log.error('XHR Failed for removeAuthor.' + error.data)
            }
  }

  function removeAuthorFromBook(authorId, bookId) {
    return $http.delete(URL_API+'/authors/'+authorId+'/books/'+bookId)
            .then(removeAuthorFromBookComplete)
            .catch(removeAuthorFromBookFailed)

            function removeAuthorFromBookComplete(response) {
              return response.data
            }

            function removeAuthorFromBookFailed(error) {
              $log.error('XHR Failed for removeAuthorFromBook.' + error.data)
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
              $log.error('XHR Failed for addAuthorToBook.' + error.data)
            }
  }
}