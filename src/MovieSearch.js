import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const MovieSearch = ({ search,setRate ,newRate }) => {
  const [rating, setRating] = useState(1);
  const onStarClick = (nextValue ,name) => {
    setRate(nextValue);
  };

  return (
    <div>
      <input
        id="search"
        type="text"
        placeholder="search"
        onChange={(e) => search(e.target.value)}
      />
      <div id="rate">
        <Rating
        name="rate1"
        ratingValue={newRate}
        onStarClick={onStarClick} /* Rating Props */
      />
      </div>
    </div>
  );
};

export default MovieSearch;
