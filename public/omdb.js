const OMDB = {
  search: function(query) {
    return $.get(`http://www.omdbapi.com/?s=${query}`).then( res => res.Search )
  },
  find: function(id) {
    return $.get(`http://www.omdbapi.com/?i=${id}`)
  }
}
