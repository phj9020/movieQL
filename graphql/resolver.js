import { getMovies, getById, addMovies, deleteMovies } from './db';

// query resolve
const resolver = {
    Query: {
        movies: () =>  getMovies(),
        movie: (_, {id}) => getById(id)
    },
    Mutation: {
        addMovie: (_, {title, score}) => addMovies(title, score),
        deleteMovie: (_, {id}) => deleteMovies(id)
    }
}

export default resolver;


