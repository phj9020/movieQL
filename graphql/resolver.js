import {getMovies, getMovie, getSuggestion} from './db';

const resolver = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        movie: (_, {id}) => getMovie(id),
        suggestions: (_, {id}) => getSuggestion(id)
    }
}


export default resolver;
