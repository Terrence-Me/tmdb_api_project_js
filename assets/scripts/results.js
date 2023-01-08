const resultsCard = document.getElementById('card-results');

const searchPosterBaseUrl =
  'https://www.themoviedb.org/t/p/w94_and_h141_bestv2';
const searchMovieBaseUrl = 'https://www.themoviedb.org/movie/';

let currentSearch;

const fetchMovieSearch = async (currentSearch) => {
  let searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=6e33035fa0621772e26e7510c45c539e&language=en-US&query=${currentSearch}&page=1&include_adult=false`;
  console.log(searchUrl);

  let response = await fetch(searchUrl);
  let data = await response.json();
  console.log(data);
  buildSearchCard(data);
};

if (localStorage.getItem('currentSearch')) {
  currentSearch = JSON.parse(localStorage.getItem('currentSearch'));
  fetchMovieSearch(currentSearch);
}

const buildSearchCard = (data) => {
  resultsCard.innerHTML = data.results
    .map((movie, index) => {
      return `<div class="card_movie">
    <div class="wrapper">
        <div class="movie_image">
            <div class="movie_poster">
                <a href=${searchMovieBaseUrl}${movie.id}>
                    <img src= ${searchPosterBaseUrl}${movie.poster_path}
                        alt=${movie.title}>
                </a>
            </div>
        </div>
        <div class="movie_details">
            <div class="wrapper">
                <div class="title">
                    <div>
                        <a href=${searchMovieBaseUrl}${movie.id}>
                            <h2>${movie.title}</h2>
                        </a>
                        <span class="release_date">
                        ${movie.release_date}
                        </span>
                    </div>
                </div>
            </div>
            <div class="movie_overview">
                <p>
                    ${movie.overview}
                </p>
            </div>
        </div>
    </div>
</div>`;
    })
    .join(' ');
};

// fetchMovieSearch();
// window.onload = fetchMovieSearch();
