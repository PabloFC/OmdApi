import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Heading from "../components/Heading";
import MovieList from "../components/MovieList";
import AddFavourites from "../components/AddFavourites";
import RemoveFavourites from "../components/RemoveFavourites";
import useMovies from "../hooks/useMovies";

const Home = () => {
  const { movies, getMovies } = useMovies();
  const [searchWords, setSearchWords] = useState("");
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    getMovies(searchWords);
  }, [searchWords, getMovies]);

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
  };

  return (
    <div className="container-fluid movieList">
      <div className="row flex-column flex-md-row d-flex align-items-center mt-4 mb-4">
        <div className="col-12 col-md-auto mb-3 mb-md-0">
          <Heading title="Movies" />
        </div>
        <div className="col-12 col-md">
          <SearchInput
            searchWords={searchWords}
            setSearchWords={setSearchWords}
          />
        </div>
      </div>
      <div className="row">
        <MovieList
          movies={movies}
          handleAddFavouritesMovie={addFavouriteMovie}
          favouriteComponent={AddFavourites}
        />
      </div>

      {favourites.length > 0 && (
        <>
          <div className="row d-flex align-items-center mt-4 mb-4">
            <div className="col-12">
              <Heading title="Favorites" />
            </div>
          </div>
          <div className="row">
            <MovieList
              movies={favourites}
              handleAddFavouritesMovie={removeFavouriteMovie}
              favouriteComponent={RemoveFavourites}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
