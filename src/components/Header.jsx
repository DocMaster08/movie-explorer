import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

function Header({ onSearch, onFavoritePage }) {
  return (
    <div className='flex items-center justify-between bg-amber-500 p-3'>
      <h1 className='text-white font-bold text-lg tracking-wider'>Movie Explorer</h1>
      <div className='flex gap-5'>
        <SearchBar onSearch={onSearch} />
        <button onClick={onFavoritePage} className='text-white font-semibold bg-amber-800 rounded-full px-2 cursor-pointer'>Favorites</button>
      </div>
    </div>
  )
}

export default Header