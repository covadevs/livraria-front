app.factory('authorFactory', authorFactory)

authorFactory.$inject = ['$http', '$routeParams', '$log']

function authorFactory($http, $routeParams, $log) {
  var services = {
      getAuthors      : getAuthors,
      getAuthorBooks  : getAuthorBooks
  };

  return services;

  function getAuthors() {
    return $http.get('http://localhost:8080/authors')
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
    return  $http.get('http://localhost:8080/authors/'+authorId+'/books')
            .then(getAuthorBooksComplete)
            .catch(getAuthorBooksFailed)

            function getAuthorBooksComplete(response) {
              return response.data;
            }

            function getAuthorBooksFailed(error) {
              $log.error('XHR Failed for getAuthorBooks.' + error.data);
            }

  }


}

// ['$http', function($http) {
//   return {
//         getAuthors: $http.get('http://localhost:8080/authors')
//                       .success(function(data) {
//                         return data;
//                       })
//                       .error(function(data) {
//                         return data;
//                       }),
//         getAuthorBooks: function(authorId) { 
//           $http.get('http://localhost:8080/{{authorId}}/books')
//           .success(function(data){
//             return data;
//           }) 
//           .error(function(data){
//             return data;
//           })
//         }
        
//   }
// }]);