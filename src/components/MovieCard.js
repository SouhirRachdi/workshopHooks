import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";

const MovieCard = (props) => {
  return (
    <div className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={props.movie.posterURL} className="poster" />
        </div>
        <div className="ticket-container">
          <div className="ticket__content">
            <h4 className="ticket__movie-title">{props.movie.Title}</h4>

            <p className="ticket__current-price">
              {" "}
              <Rating readonly={true} ratingValue={props.movie.rating} />{" "}
            </p>
            <button
              className="deletee"
              onClick={() => props.handelDelet(props.movie.Title)}
            >
              {" "}
              delete{" "}
            </button>
            <Link className="movieDetails" to={`/movie/${props.movie.Title}`}>
              Movie Details
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
