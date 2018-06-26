app.factory('authorFactory', authorFactory)

authorFactory.$inject = ['$http', '$routeParams', '$log']

function authorFactory($http, $routeParams, $log) {
  const URL_API = "http://localhost:8080";

  var services = {
      getAuthors      : getAuthors,
      getAuthorBooks  : getAuthorBooks,
      editAuthor: editAuthor,
      removeAuthor: removeAuthor,
      addAuthor: addAuthor,
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
}