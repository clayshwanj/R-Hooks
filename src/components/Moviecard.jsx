import React from "react";

const MovieCard = ({ movie }) => {
  console.log(movie);
  return (
    <>
      <div className="Moviecard">
        <img src={movie.image} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>
          <strong>Rating:</strong> {movie.rating}/5
        </p>
      </div>
    </>
  );
};

export default MovieCard;
