import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [details, setDetails] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

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
    <div className="container movieDetails mt-4 animate__animated animate__fadeInLeft">
      <h1 className="m-4">Movie details</h1>

      <div className="row">
        <div className="col-12 col-md-4  mb-4">
          <img
            src={details.Poster}
            alt={`${details.Title} Poster`}
            className="img-fluid"
          />
        </div>
        <div className="col-12 col-md-8">
          <h5>
            <span className="colorSecundario">Titulo:</span> {details.Title}
          </h5>
          <h5>
            <span className="colorSecundario">Año:</span> {details.Year}
          </h5>
          <h5>
            <span className="colorSecundario">Sipnosis:</span> {details.Plot}
          </h5>
          <h5>
            <span className="colorSecundario">Puntuación:</span>{" "}
            {details.Ratings[0].Value}
          </h5>
          <button className="btn btn-outline-primary" onClick={onNavigateBack}>
            Volver
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
