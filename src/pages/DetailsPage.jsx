import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getMovie } from "../api/movieApi";
import { getMovieBackdrop, getMoviePoster } from "../utils/HelperFunctions";
import { Star, TrendingUp, MoveLeft } from "lucide-react";

function DetailsPage() {
    const { id } = useParams();
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true)
                const result = await getMovie(id);
                setMovie(result)
                console.log(result)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchMovie();
    }, [])

    if (error) {
        return <p className="text-red-300 text-bold p-10 text-2xl">{error}</p>
    }

    return (
        <div className="relative">
            <Link to={'/'} className="text-gray-800 absolute top-2 left-10 bg-amber-200 rounded-full p-1 cursor-pointer"><MoveLeft size={20}></MoveLeft></Link>

            {loading ?
                <p className="text-white text-2xl text-center p-40 font-bold">Loading...</p>
                :
                <>{movie ?
                    <div className="text-white flex flex-col gap-3 items-center mt-5">

                        <div className="grid grid-cols-[2fr_2fr_3fr] w-10/12 gap-3 items-end ">
                            <div className="flex flex-col gap-1 col-span-2">
                                <h1 className="text-5xl font-mono">{movie.title}</h1>
                                <div className="flex gap-5 text-gray-300">
                                    <p className="">Movie</p>
                                    ~
                                    <p className="">{movie.release_date}</p>
                                </div>

                            </div>

                            <div className="justify-self-end flex gap-10 ">
                                <div className="flex flex-col items-center">
                                    <p className="text-gray-300 text-sm font-semibold tracking-widest">RATING</p>
                                    <div className="flex items-center gap-2">
                                        <Star fill="yellow" strokeWidth={0}></Star>
                                        <div>
                                            <p className="font-bold text-xl">{movie.vote_average.toFixed(1)} <span className="text-gray-300 font-normal text-sm">/ 10</span></p>
                                            <p className="text-gray-400 text-xs font-medium" >{movie.vote_count}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-gray-300 text-sm font-semibold tracking-widest">POPULARITY</p>
                                    <div className="flex items-center gap-2 h-full ">
                                        <TrendingUp size={24} color="lime"></TrendingUp>
                                        <p className="font-bold text-xl">{movie.popularity.toFixed(0)}</p>
                                    </div>
                                </div>
                            </div>

                            <img className="rounded-l-xl" src={getMoviePoster(movie.poster_path)} />
                            <img className="col-span-2 h-full rounded-r-xl" src={getMovieBackdrop(movie.backdrop_path)} />

                            <div className="col-span-3 flex gap-5 mt-1">
                                {movie.genres.map((genre) => <p className="border rounded-full border-gray-500 px-2 cursor-pointer hover:bg-gray-600" key={genre.id}>{genre.name}</p>)}
                            </div>

                            <p className="col-span-2 mb-10 font-semibold">{movie.overview}</p>
                            <button className="self-start justify-self-end bg-amber-400 p-2 rounded-full text-black font-bold px-5 cursor-pointer">+ Add To Favorites</button>


                        </div>



                    </div>
                    :
                    <p>Movie not found.</p>

                }
                </>
            }
        </div>

    )
}

export default DetailsPage