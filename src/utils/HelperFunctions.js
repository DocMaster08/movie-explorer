export function getMoviePoster(path) {
  if (!path) return "/placeholder.png";
  return `https://image.tmdb.org/t/p/w500${path}`;
}

export function getMovieBackdrop(path){
  if (!path) return "/placeholder2.png";
  return `https://image.tmdb.org/t/p/w500${path}`;
}