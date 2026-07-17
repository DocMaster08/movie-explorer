export function getMoviePoster(path) {
  if (!path) return "/placeholder.png";
  return `https://image.tmdb.org/t/p/w500${path}`;
}