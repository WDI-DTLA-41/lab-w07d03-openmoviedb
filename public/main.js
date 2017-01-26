const searchMovies = (evt) => {
  const query = document.querySelector('#query').value
  OMDB.search(query).then( (results) => {
    $('#results').html(renderResults(results));
  });
}

const showMovie = (evt) => {
  const id = $(evt.target).data().id;
  OMDB.find(id).then( (movie) => {
    $('#detail').html(renderMovie(movie));
  });
}

const renderMovie = (movie) => {
  return (`
    <h1>${movie.Title}</h1>
    <img src="${movie.Poster}">
    <p>${movie.Plot}</p>
  `)
}

const renderResults = (results) => {
  const list = results.map(renderResult).join('');
  return (`
    <ul>
      ${list}
    </ul>
  `)
}

const renderResult = (result) => {
  return (`
    <li data-id="${result.imdbID}" class="movie">${result.Title}</li>
  `)
}

$('button').on('click', searchMovies);
$('#results').on('click', '.movie', showMovie);

