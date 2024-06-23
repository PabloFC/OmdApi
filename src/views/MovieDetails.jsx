import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchApi(id) {
      try {
        let response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=c399d1f6`
        );
        let json = await response.json();
        setDetails(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchApi(id);
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movieDetails">
      <h1 className="m-4">Movie details</h1>

      <div className="row">
        <div className="d-flex flex-row  ">
          <div className="m-4 col col-sm-2">
            <img src={details.Poster} alt={`${details.Title} Poster`} />
          </div>
          <div className="p-5 col col-sm-4" key={details.imdbID}>
            <h5>
              <span className="colorSecundario">Titulo:</span> {details.Title}
            </h5>
            <h5>
              <span className="colorSecundario">Año:</span> {details.Year}
            </h5>
            <h5>
              <span className="colorSecundario ">Sipnosis:</span> {details.Plot}
            </h5>
            <h5>
              <span className="colorSecundario">Puntuación:</span>{" "}
              {details.Ratings[0].Value}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
