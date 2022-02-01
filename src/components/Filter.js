import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import {Link } from "react-router-dom";

const SearchBox = ({ handelFilter, handelRating }) => {
  const handleRating = (rate) => {
    handelRating(rate);
  };

  const [searchValue, setSearchValue] = useState("");
  const searchMovie = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
    handelFilter(searchValue);
  };

  return (  
<div className="header">
  
      <div className="test">
        <i className="fas fa-film"> </i>
        <p className="mov">Movie List </p>
      </div>
      <nav className=" bar">
     <ul className=" navbarul">
       <Link to="/"><li>Home</li></Link>
           
       <Link to="/Movielist"><li>Movielist</li></Link> 
         </ul>
         </nav> 
         
      <div className="flexx">
        <form>
          <div>
            <input
              type="text"
              className="control"
              onChange={searchMovie}
              value={searchValue}
              placeholder="search Movie ..."
              required
            />
          </div>
        </form>{" "}
        <Rating onClick={handleRating} />
      </div>
      </div>
    
  );
};
export default SearchBox;
