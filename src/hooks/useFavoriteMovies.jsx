import { useState, useCallback } from "react";

const useFavoriteMovies = () => {
  const [favorites, setFavorites] = useState([]);

  const addFavoriteMovie = useCallback((movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  }, []);

  const removeFavoriteMovie = useCallback((movie) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.imdbID !== movie.imdbID)
    );
  }, []);

  return { favorites, addFavoriteMovie, removeFavoriteMovie };
};

export default useFavoriteMovies;
