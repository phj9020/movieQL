
let movies = [
    {
        id:0,
        title: "Lord of the Rings",
        score: 5
        
    },
    {
        id:1,
        title: "Toy Story",
        score: 3
        
    },
    {
        id:2,
        title: "Toms & Jerry",
        score: 1
        
    },
    {
        id:3,
        title: "Harry Pottter",
        score: 4
    }
]

export const getMovies = () => movies;

export const getById = (id) => {
    const filteredMovies = movies.filter(movie => movie.id === id)
    return filteredMovies[0];
}

export const deleteMovies = (id) => {
    const cleanMovies = movies.filter(movie => movie.id !== id)
    if(movies.length > cleanMovies.length) {
        movies = cleanMovies;
        return true;
    } else {
        return false;
    }
}

export const addMovies = (title, score) => {
    const newMovie = {
        id: `${movies.length + 1}`,
        title: title,
        score: score
    };
    movies.push(newMovie);
    return newMovie;
}



export default movies;