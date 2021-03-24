import axios from 'axios';
import fetch from 'node-fetch';


// Axios 

const LIST_URL = "https://yts.mx/api/v2/list_movies.json"
const DETAIL_URL = "https://yts.mx/api/v2/movie_details.json"
const SUGGESTION_URL = "https://yts.mx/api/v2/movie_suggestions.json"



export const getMovies = async (limit, rating) => {
    const {data : { data : { movies }}} = await axios.get(LIST_URL, {
        params: { 
            limit: limit,
            minimum_rating: rating
        }
    });
    return movies;
}

export const getMovie = async (id) => {
    const { data: { data: { movie } } } = await axios.get(DETAIL_URL, {
        params: {
            movie_id: id
        }
    });
    return movie;
}

export const getSuggestion = async (id) => {
    const {data : { data : { movies }}} = await axios.get(SUGGESTION_URL, {
        params: {
            movie_id: id
        }
    });
    return movies;
}



// Wrap REST API with GraphQL 
// USING FETCH 

// const API_URL = "https://yts.mx/api/v2/list_movies.json?"
// const DETAIL_URL = "https://yts.mx/api/v2/movie_details.json?"
// const SUGGESTION_URL = "https://yts.mx/api/v2/movie_suggestions.json?"

/*

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL; 
    if(limit > 0) {
        REQUEST_URL += `limit=${limit}`
    }
    if(rating > 0) {
        REQUEST_URL += `&minimum_rating=${rating}`
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies)
}

export const getMovie = (id) => {
    let REQUEST_URL = DETAIL_URL;
    if(id) {
        REQUEST_URL += `movie_id=${id}`
    }
    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movie)
}

export const getSuggestion = (id) => {
    let REQUEST_URL = SUGGESTION_URL;
    if(id) {
        REQUEST_URL += `movie_id=${id}`
    }

    return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies)
}

*/