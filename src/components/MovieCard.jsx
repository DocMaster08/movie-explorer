import { Star } from "lucide-react"
import { getMoviePoster } from "../utils/HelperFunctions"

function MovieCard({ movie }) {
    const { title, poster_path, overview, vote_average, vote_count, release_date } = movie
    return (
        <div className=" w-2xs relative cursor-pointer">
            <img src={getMoviePoster(poster_path)} alt={title} />
            <div className="absolute text-gray-300 bottom-0 w-full text-center z-10">
                <div className="flex gap-1 justify-center">
                    <div>
                        <Star fill="yellow" strokeWidth={0}></Star>
                    </div>
                    <p>{vote_average}</p>
                    <p>({vote_count})</p>
                </div>
                <h1 className="font-bold text-xl text-white ">{title}</h1>
                <p>{release_date}</p>
            </div>
            <div className="absolute w-full bg-black h-20 opacity-50 bottom-0 z-0"></div>
        </div>
    )
}

export default MovieCard