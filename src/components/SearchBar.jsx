import React, { useState } from 'react'
import { Search } from 'lucide-react'

function SearchBar({onSearchStart}) {
    const [searchInput, setSearchInput] = useState('');

    const handleKeyDown = (e) => {
        if (e.key === 'Enter'){
            startSearch()
        }
    }

    const startSearch = () => {
        if (searchInput === '') return
        onSearchStart(searchInput)
    }

    return (
        <div>
            <input value={searchInput} onChange={(e) => {setSearchInput(e.target.value)}} onKeyDown={handleKeyDown} className='shadow-2xl bg-white rounded-full w-sm px-3 p-0.5' />
            <button onClick={startSearch} className='absolute top-4 right-5 text-gray-700 cursor-pointer'>
                <Search size={18}></Search>
            </button>
        </div>
    )
}

export default SearchBar