import MovieCard from "./MovieCard"

function MovieList({movies}) {
    return (

        <div className="grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-y-10 justify-items-center mt-10">
            {movies.map((movie) => <MovieCard movie={movie} key={movie.id}></MovieCard>)}
        </div>

    )
}

export default MovieList