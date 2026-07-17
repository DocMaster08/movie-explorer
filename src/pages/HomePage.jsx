import { useEffect, useState } from "react"
import Header from "../components/Header"
import { searchMovies } from "../api/movieApi"
import MovieList from "../components/MovieList"

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                setLoading(true)
                const results = await searchMovies(searchTerm)
                console.log(results)
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
            }
        }, 500)

        return () => clearTimeout(timer)

    }, [searchTerm])

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

    return (
        <div>
            <Header onSearch={handleSearch}></Header>
            {loading ?
             <>
                <p className="text-white font-semibold text-2xl p-10">Loading ...</p>
            </> :
                <>
                    {movies.length? <><p className="text-white text-2xl font-semibold text-center mt-5">current search: {searchTerm}</p>
                    <MovieList movies={movies} /></>:
                    <>
                     <p className="text-white font-bold text-2xl text-center p-20">No results for search: "{searchTerm}". Try searching something else.</p>
                    </>
                    }
                </>
            }

        </div>
    )
}

export default HomePage