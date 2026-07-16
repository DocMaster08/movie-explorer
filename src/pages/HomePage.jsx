import { useEffect, useState } from "react"
import Header from "../components/Header"
import { searchMovies } from "../api/movieApi"

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                await searchMovies(searchTerm)
            } catch (error) {
                console.error("Error fetching movies:", error)
            }
        }
        fetchMovies()
    }, [searchTerm])

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

  return (
    <div>
        <Header onSearch={handleSearch}></Header>
        <p className="text-white">current search: {searchTerm}</p>
    </div>
  )
}

export default HomePage