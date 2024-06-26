import { useEffect, useState } from "react";
import SearchInput from "../components/SearchInput";
import Heading from "../components/Heading";
import MovieList from "../components/MovieList";
import AddFavourites from "../components/AddFavourites";
import RemoveFavourites from "../components/RemoveFavourites";

const Home = () => {
  const [searchWords, setSearchWords] = useState("");
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const getMovies = async (searchWords) => {
    const url = `https://www.omdbapi.com/?s=${searchWords}&apikey=c399d1f6`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching the movies: ", error);
      setMovies([]);
    }
  };

  useEffect(() => {
    getMovies(searchWords);
  }, [searchWords]);

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
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading title="Movies" />
        <SearchInput
          searchWords={searchWords}
          setSearchWords={setSearchWords}
        />
        {/* {console.log("searchWords: ", searchWords)} */}
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
            <Heading title="Favorites" />
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
