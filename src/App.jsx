import React from "react";
// import MovieCard from "./components/Moviecard";
import MovieList from "./components/Movielist";
// import Filter from "./components/Filter";
import movies from "./movies.js";

const App = () => {
  return (
    <div className="container">
      {/* {movies.map((movie) => (
        <div key={movie.id} className="movie">
          <MovieCard MovieCard={movie.movieCard} />
          <Filter Filter={movie.filter} />
        </div>
      ))} */}
      <MovieList movieList={movies} />
    </div>
  );
};

export default App;
