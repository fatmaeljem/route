import React from "react";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";

const MovieCard = ({ movie,props }) => {
  return (
    <div>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img className="locandina" src={movie.img} alt="" />
            <h2>{movie.title}</h2>
            <Rating ratingValue={movie.rate} /* Rating Props */ />
            <h4>{movie.date}</h4>
            <span className="minutes">{movie.duration}</span>
            <p className="type">{movie.genre}</p>

            <div className="movie_desc">
            <p className="text">
            <Link to={`/descrption/${movie.id}` }>  <button id="button">  show more  </button>  </Link>
            <br/>
              <br/>
              </p>
            </div>
          </div>
        </div>
        <div className="blur_back"></div>
      </div>
    </div>
  );
};

export default MovieCard;
