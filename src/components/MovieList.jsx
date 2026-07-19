import MovieCard from "./MovieCard"

function MovieList({movies, onFavorite, favorites}) {
    return (

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 justify-items-center mt-10 p-10">
            {movies.map((movie) => <MovieCard movie={movie} onFavorite={onFavorite} favorites={favorites} key={movie.id}></MovieCard>)}
        </div>

    )
}

export default MovieList