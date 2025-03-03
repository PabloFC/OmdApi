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
    const fetchApi = async (id) => {
      try {
        let response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=c399d1f6`
        );
        if (!response.ok) {
          throw new Error("Response was not ok");
        }
        let json = await response.json();
        setDetails(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchApi(id);
  }, [id]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container movieDetails  animate__animated animate__fadeInLeft py-4">
      <h1 className="m-4">Movie details</h1>

      <div className="row">
        <div className="col-12 col-md-4 mb-4">
          <img
            src={details.Poster}
            alt={`${details.Title} Poster`}
            className="img-fluid movie-img"
          />
        </div>
        <div className="col-12 col-md-8 mt-1">
          <h5>
            <span className="secondaryColor">Original tittle:</span>{" "}
            {details.Title}
          </h5>
          <h5>
            <span className="secondaryColor">Year:</span> {details.Year}
          </h5>
          <h5>
            <span className="secondaryColor">Runtime:</span> {details.Runtime}
          </h5>
          <h5>
            <span className="secondaryColor">Country:</span> {details.Country}
          </h5>
          <h5>
            <span className="secondaryColor">Director: </span>
            {details.Director}
          </h5>
          <h5>
            <span className="secondaryColor">Actors: </span>
            {details.Actors}
          </h5>
          <h5>
            <span className="secondaryColor">Synopsis:</span> {details.Plot}
          </h5>
          <h5>
            <span className="secondaryColor">Rating:</span>{" "}
            {details.Ratings[0].Value}
          </h5>
          <button
            className="btn btn-outline-light mt-2"
            onClick={onNavigateBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
