console.log('OMDB is linked');

var search = function(title, cb) {
  $.get('http://www.omdbapi.com/?s=' + title, function(res){
    cb(res);
  })
}

var find = function(imdbID, cb) {
  $.get('http://www.omdbapi.com/?i=' + imdbID, function(res){
    cb(res);
  })
}

var OMDB = {
  search,
  find
}
