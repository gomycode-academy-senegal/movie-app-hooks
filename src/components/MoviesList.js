import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

import MovieCard from "./MovieCard";

const MoviesList = ({ moviesArray }) => {
  return (
    <div className="row mt-2">
      {moviesArray.map((movie, key) => (
        <>
          <MovieCard movie={movie} key={key} />
          <NavLink to={`/film/${movie.id}`}>Show</NavLink>
        </>
      ))}
    </div>
  );
};

MoviesList.propTypes = {
  moviesArray: PropTypes.array.isRequired,
};

export default MoviesList;
