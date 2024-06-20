const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <div className="image-gallery">
      {props.movies.map((movie, index) => (
        <div
          className="image-container d-inline-flex justify-content-start m-3"
          key={index}
        >
          <div className="card">
            <img src={movie.Poster} alt={movie.Title} className="img-fluid" />
            <div
              onClick={() => props.handleFavouritesClick(movie)}
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
