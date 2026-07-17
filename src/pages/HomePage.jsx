import { useEffect, useState } from "react"
import Header from "../components/Header"
import { searchMovies, getPopularMovies } from "../api/movieApi"
import MovieList from "../components/MovieList"
import { MoveLeft } from "lucide-react"

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading(true)

        const fetchMovies = async () => {
            try {
                const results = await searchMovies(searchTerm)
                console.log(results)
                setMovies(results)

            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        const fetchPopularMovies = async () => {
            try {

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

    }, [searchTerm])

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    const handleClickBack = () => {
        setSearchTerm('')
    }

    return (
        <div>
            <Header onSearch={handleSearch}></Header>
            {loading ?
                <>
                    <p className="text-white font-semibold text-2xl p-10">Loading ...</p>
                </> :
                <div className="relative">
                    {movies.length ? <>
                        {searchTerm &&
                            <button onClick={handleClickBack} className="text-gray-800 absolute top-2 left-10 bg-amber-200 rounded-full p-1 cursor-pointer"><MoveLeft size={20}></MoveLeft></button>
                        }
                        <div className="text-white text-2xl font-semibold text-center mt-5">{searchTerm?<p>current search: {searchTerm}</p>:<p>Most Popular Movies</p>}</div>
                        <MovieList movies={movies} /></> :
                        
                            <p className="text-white font-bold text-2xl text-center p-20">No results for search: "{searchTerm}". Try searching something else.</p>
                        
                    }
                </div>
            }

        </div>
    )
}

export default HomePage