//https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
const API_KEY = "api_key=b51620c9dced2530cb1977a2d1c06927"
const API_URL = "https://api.themoviedb.org/3"
const MOVIE_API_URL = `${API_URL}/movie/popular?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const SEARCH_URL = `${API_URL}/search/movie?${API_KEY}`;


console.log(MOVIE_API_URL)

const getMovies = (url) => {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.results)
            showMovies(data.results);

        })
        .catch((error) => console.log(error));
}
getMovies(MOVIE_API_URL)

const moviesContainer = document.querySelector(".movieContainer");


const showMovies = (movies) => {
    moviesContainer.innerHTML = ''
    movies.forEach((movie) => {
        //destructuring = calling the fields needed in movie at the same time
    const {title, overview,poster_path, vote_average} = movie;
   const divTag =  document.createElement("div");
   divTag.classList.add("movieDetails");
    divTag.innerHTML = `
    <img src="${IMAGE_URL}${poster_path}" alt="">
       <div class ="movieTitle">
       <p>${title}</p>
       <p>${vote_average}</p>
       </div>
       <h2>Overview</h2>
       <p>${overview}</p>
           `;
        moviesContainer.appendChild(divTag)
    });
}

const form = document.querySelector(".search");
const search = document.querySelector("#searchInput");

form.addEventListener("keyup",(e) =>{
    e.preventDefault();
    const searchValue = search.value
    if (searchValue) {
        getMovies(SEARCH_URL + "&query=" + searchValue)
    }else{
        getMovies(API_URL);
    }
});

