import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import MovieDetails from "../views/MovieDetails";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movieDetails/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
