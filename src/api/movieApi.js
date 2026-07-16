const token = import.meta.env.VITE_TMDB_API_TOKEN

export async function searchMovies(query) {
    
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

    fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`, options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));
}
