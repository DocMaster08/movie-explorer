import { Star } from "lucide-react"
import { getMoviePoster } from "../utils/HelperFunctions"
import { Link } from "react-router-dom"
import { useState } from "react"

function MovieCard({ movie, onFavorite, favorites }) {
    const { title, poster_path, vote_average, vote_count, release_date, id } = movie

    const [isHovered, setIsHovered] = useState(false)

    const handleClickFavorite = () => {
        onFavorite(id)
    }
    return (
        <div className="relative group">
            <Link to={`/movie/${id}`} className=" w-2xs cursor-pointer hover:opacity-70 transition-opacity duration-200">
                <img src={getMoviePoster(poster_path)} alt={title} />
                <div className="absolute text-gray-300 bottom-0 w-full text-center z-10">
                    <div className="flex gap-1 justify-center">
                        <div>
                            <Star fill="yellow" strokeWidth={0}></Star>
                        </div>
                        <p>{vote_average.toFixed(1)}</p>
                        <p>({vote_count})</p>
                    </div>
                    <h1 className="font-bold text-xl text-white ">{title}</h1>
                    <p>{release_date}</p>
                </div>
                <div className="absolute w-full bg-black h-20 opacity-50 bottom-0 z-0"></div>
                
            </Link>
            <div onClick={handleClickFavorite} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`absolute w-10 h-10  rounded-full top-3 right-3 flex justify-center items-center group-hover:opacity-100 transition-opacity duration-200 cursor-pointer ${(!favorites||!favorites.has(id))&&'opacity-0 bg-gray-600' }`}>
                <Star fill={isHovered||(favorites&&favorites.has(id))?"yellow":"dark-gray"} strokeWidth={0} fillOpacity={0.9} size={favorites&&favorites.has(id)?25:20}></Star>
            </div>
            
        </div>
    )
}

export default MovieCard