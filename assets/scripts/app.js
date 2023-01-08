const media = document.getElementById('media');
const sumbitBtn = document.getElementById('submitbtn');

const submitBtnHandler = (event) => {
  event.preventDefault();
  console.log(event);
  console.log(event.target.form[1].value.trim());
};
sumbitBtn.addEventListener('click', submitBtnHandler);

const posterBaseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
const movieIdBaseUrl = 'https://www.themoviedb.org/movie/';

const popularUrl =
  'https://api.themoviedb.org/3/movie/popular?api_key=6e33035fa0621772e26e7510c45c539e&language=en-US&page=1';

const fetchPopular = async () => {
  let response = await fetch(popularUrl);
  let data = await response.json();
  console.log(data.results);
  buildPopularCards(data);
};

const buildPopularCards = (data) => {
  console.log(data);
  media.innerHTML = data.results
    .map((movie, index) => {
      return `<div class="column_content">
    <div class="card">
        <div class="card-image">
            <div class="card-wrapper">
                <a class="image" href=${movieIdBaseUrl}${movie.id}>
                    <img src=${posterBaseUrl}${movie.poster_path} alt=${
        movie.title
      }>
                </a>
            </div>
            <div class="card-options">
                <a class="no-click" href="#">
                    <div class="glyophicon"></div>
                </a>
            </div>
        </div>
        <div class="card-content">
            <div class="consensus">
                <div class="outer-ring">
                    <div class="user-score">
                        <div class="percent">
                            <span class="icon">
                                ${movie.vote_average * 10}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <h2>
                <a href="#" title=${movie.title}>${movie.title}</a>
            </h2>
            <p>${movie.release_date}</p>

        </div>
        <div class="hover"></div>
    </div>
</div>`;
    })
    .join(' ');
};

fetchPopular();
