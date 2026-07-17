const token = import.meta.env.VITE_TMDB_API_TOKEN
const baseUrl = 'https://api.themoviedb.org/3'

const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    };

export async function searchMovies(query) {
    

    const res = await fetch(`${baseUrl}/search/movie?include_adult=true&language=en-US&page=1&query=${encodeURIComponent(query)}`, options)

    if (!res.ok){
        throw new Error("Failed to fetch movies")
    }   

    const data = await res.json()

    return data.results
}

export async function getPopularMovies(){
    const res = await fetch(`${baseUrl}/movie/popular?language=en-US&page=1`, options)

    if (!res.ok){
        throw new Error("Failed to fetch popular movies")
    }

    const data = await res.json()
    
    return data.results
}