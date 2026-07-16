import SearchBar from './SearchBar'

function Header({onSearch}) {
  return (
    <div className='flex items-center justify-between bg-amber-500 p-3'>
        <h1 className='text-white font-bold text-lg tracking-wider'>Movie Explorer</h1>
        <SearchBar onSearch={onSearch}/>
    </div>
  )
}

export default Header