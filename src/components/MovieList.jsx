import { Link } from "react-router-dom";

const MovieList = ({
  movies,
  handleAddFavouritesMovie,
  favouriteComponent,
}) => {
  const FavouriteComponent = favouriteComponent;

  return (
    <div className="image-gallery">
      {movies.map((movie, index) => (
        <div
          className="image-container d-inline-flex justify-content-start m-3"
          key={index}
        >
          <div className="card">
            <Link to={`/movie/${movie.imdbID}`}>
              <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            </Link>
            <div
              onClick={() => handleAddFavouritesMovie(movie)}
              className="overlay d-flex align-items-center justify-content-center"
            >
              <FavouriteComponent movie={movie} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
