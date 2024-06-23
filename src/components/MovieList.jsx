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
            <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
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
