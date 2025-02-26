import { useCallback, useState } from "react";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const getMovies = useCallback(async (searchWords) => {
    const url = `https://www.omdbapi.com/?s=${searchWords}&apikey=c399d1f6`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
        setError(null);
      } else {
        setMovies([]);
        setError("No movies found");
      }
    } catch (error) {
      console.error("Error fetching the movies: ", error);
      setMovies([]);
      setError("Error fetching the movies");
    }
  }, []);

  return { movies, error, getMovies };
};

export default useMovies;
