import React from 'react'
import SearchBar from './SearchBar'

function Header({onSearchStart}) {
  return (
    <div className='flex items-center justify-between bg-amber-500 p-3'>
        <h1 className='text-white font-bold text-lg tracking-wider'>Movie Explorer</h1>
        <SearchBar onSearchStart={onSearchStart}/>
    </div>
  )
}

export default Header