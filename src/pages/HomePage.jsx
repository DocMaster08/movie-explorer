import { useState } from "react"
import Header from "../components/Header"

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')

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