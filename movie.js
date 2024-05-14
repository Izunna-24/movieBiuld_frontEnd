const API_KEY = "api_key=b51620c9dced2530cb1977a2d1c06927"
const API_URL = "https://api.themoviedb.org/3/movie"
const MOVIE_API_URL = `${API_URL}/popular?${API_KEY}`;

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

const showMovies = (movies) => {
    movies.forEach((movie) => {

    })
}