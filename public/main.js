console.log('hello from main.js');

const $search = $('button');
const $query = $('#query');
const $results = $('#results');
const $detail = $('#detail');


$search.on('click', function() {
  OMDB.search($query.val(), function(result) {
     console.log(result.Search);
    var html = '<ul>'
    result.Search.forEach(function(ind){
      var id = ind.imdbID;
      html += `<li><p id=${id}>Title: ` + ind.Title + '</a></p></li>';
    });
    html += '</ul>';
    $results.append(html);
    $('ul').on('click', function(evt){
      // console.log(evt.target.id);
      OMDB.find(evt.target.id, function(details){
        var htmlDetails = '<p>Title: ' + details.Title + '<br>';
        htmlDetails += 'Plot: ' + details.Plot + '<br>';
        htmlDetails += 'Poster: ' + details.Poster + '</p>';
        $detail.append(htmlDetails);
      });
    })
  });
});
      // $('li').on('click', function(){
      //   OMDB.find(ind.imdbID, function(details){
      //     var htmlDetails = '<p>Title: ' + details.Title + '<br>';
      //     htmlDetails += 'Plot: ' + details.Plot + '<br>';
      //     htmlDetails += 'Poster: ' + details.Poster + '</p>';
      //     $detail.append(htmlDetails);
      //   });
      // });
