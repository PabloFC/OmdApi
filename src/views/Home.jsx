import { useState } from "react";
import SearchInput from "../components/SearchInput";
import Heading from "../components/Heading";
Heading;
const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4">
        <Heading title="Películas" />
        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
    </div>
  );
};

export default Home;
