import { useEffect, useState } from "react"
import Header from "../components/Header"
import { searchMovies, getPopularMovies, getFavoriteMovies } from "../api/movieApi"
import MovieList from "../components/MovieList"
import { MoveLeft } from "lucide-react"

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [favorites, setFavorites] = useState(new Set([]))
    const [inFavoritePage, setInFavoritePage] = useState(false)

    useEffect(() => {
        const loadedFavorites = JSON.parse(localStorage.getItem("favorites"))
        setFavorites(Array.isArray(loadedFavorites) ? new Set(loadedFavorites) : new Set([]))

    }, [])

    useEffect(() => {
        if (inFavoritePage) return

        const fetchMovies = async () => {
            try {
                setLoading(true)
                const results = await searchMovies(searchTerm)
                setMovies(results)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        const fetchPopularMovies = async () => {
            try {
                setLoading(true)
                const results = await getPopularMovies();
                setMovies(results)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        const timer = setTimeout(() => {
            if (searchTerm.trim()) {
                fetchMovies()
            } else {
                fetchPopularMovies()
            }
        }, 500)

        return () => clearTimeout(timer)

    }, [searchTerm, inFavoritePage])

    useEffect(() => {
        const fetchFavoriteMovies = async () => {
            try {
                setLoading(true)
                const results = await getFavoriteMovies(favorites)
                setMovies(results)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }

        if (inFavoritePage) {
            fetchFavoriteMovies() 
        }


    }, [inFavoritePage, favorites]) 

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    const handleClickBack = () => {
        setSearchTerm('')
    }

    const handleFavorite = (id) => {
        const newFavorites = new Set(favorites)
        if (newFavorites.has(id)) {
            newFavorites.delete(id)
        } else {
            newFavorites.add(id)
        }
        setFavorites(newFavorites)
        localStorage.setItem("favorites", JSON.stringify(Array.from(newFavorites)))
    }

    if (error) {
        return <p className="text-red-300 font-bold text-2xl p-10">{error}</p>
    }

    const handleFavoritePageToggle = () => {
        setInFavoritePage(!inFavoritePage)
    }

    return (
        <div>
            <Header onSearch={handleSearch} onFavoritePage={handleFavoritePageToggle}></Header>
            {loading ?
                <>
                    <p className="text-white font-semibold text-2xl p-10">Loading ...</p>
                </> :
                <div className="relative">
                    {movies.length ? <>
                        {searchTerm &&
                            <button onClick={handleClickBack} className="text-gray-800 absolute top-2 left-10 bg-amber-200 rounded-full p-1 cursor-pointer"><MoveLeft size={20}></MoveLeft></button>
                        }
                        <div className="text-white text-2xl font-semibold text-center mt-5">{inFavoritePage?<p>Your Favorite Movies</p>:(searchTerm ? <p>current search: {searchTerm}</p> : <p>Most Popular Movies</p>)}</div>
                        <MovieList movies={movies} onFavorite={handleFavorite} favorites={favorites} />
                    </> :
                        <p className="text-white font-bold text-2xl text-center p-20">No results for search: "{searchTerm}". Try searching something else.</p>
                    }
                </div>
            }

        </div>
    )
}

export default HomePage