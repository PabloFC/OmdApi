import { Link } from "react-router-dom";

const MovieList = ({ movies, handleAddFavoritesMovie, favoriteComponent }) => {
  const FavoriteComponent = favoriteComponent;

  return (
    <div className="image-gallery">
      {movies.map((movie, index) => (
        <div
          className="image-container d-inline-flex justify-content-start m-3"
          key={index}
        >
          <div className="card">
            <Link to={`/movieDetails/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            </Link>
            <div
              onClick={() => handleAddFavoritesMovie(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavoriteComponent movie={movie} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
