import React from "react";
import MovieList from "./components/Movielist";
import movies from "./movies.js";

const App = () => {
  return (
    <div className="container">
      <MovieList movieList={movies} />
    </div>
  );
};

export default App;
