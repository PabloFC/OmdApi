import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Heading from "../components/Heading";
import MovieList from "../components/MovieList";
import AddFavorites from "../components/AddFavorites";
import RemoveFavorites from "../components/RemoveFavorites";
import useMovies from "../hooks/useMovies";
import useFavoriteMovies from "../hooks/useFavoriteMovies";

const Home = () => {
  const { movies, getMovies } = useMovies();
  const [searchWords, setSearchWords] = useState("");
  const { favorites, addFavoriteMovie, removeFavoriteMovie } =
    useFavoriteMovies();

  useEffect(() => {
    getMovies(searchWords);
  }, [searchWords, getMovies]);

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
          handleAddFavoritesMovie={addFavoriteMovie}
          favoriteComponent={AddFavorites}
        />
      </div>

      {favorites.length > 0 && (
        <>
          <div className="row d-flex align-items-center mt-4 mb-4">
            <div className="col-12">
              <Heading title="Favorites" />
            </div>
          </div>
          <div className="row">
            <MovieList
              movies={favorites}
              handleAddFavoritesMovie={removeFavoriteMovie}
              favoriteComponent={RemoveFavorites}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
