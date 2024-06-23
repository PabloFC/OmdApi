import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./views/Home";
import MovieDetails from "./views/MovieDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
