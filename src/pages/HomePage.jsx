import { useState } from "react"
import Header from "../components/Header"

function HomePage() {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (term) => {
        setSearchTerm(term)
    }

  return (
    <div>
        <Header onSearchStart={handleSearch}></Header>
    </div>
  )
}

export default HomePage