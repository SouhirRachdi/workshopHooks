import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Moviedetails.css";

const MovieDetails = ({ movies }) => {
  const { name } = useParams();

  return (
    <div className="items">
      <div className="td vat">
        <table className="movieTable full">
          <tbody>
            <tr>
              <td>Language</td>
              <td className="nowrap">
                {movies.find((el) => el.Title === name).language}
              </td>
            </tr>

            <tr>
              <td>Type</td>
              <td
                style={{ color: "black", fontFamily: "Montserrat,sans-serif" }}
              >
                {" "}
                Drama .{movies.find((el) => el.Title == name).type}
              </td>
            </tr>
            <tr>
              <td className="nowrap">Rating</td>
              <td itemProp="aggregateRating">
                {movies.find((el) => el.Title == name).rating}
              </td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>{movies.find((el) => el.Title == name).duration}</td>
            </tr>

            <tr>
              <td>Translation</td>
              <td>{movies.find((el) => el.Title == name).translation}</td>
            </tr>
          </tbody>
        </table>
       <div className="box">
  <div className="pda bdb hd">
    <strong>Story</strong>
  </div>
  <div className="pda">
  <p>{movies.find((el) => el.Title == name).description}</p>
  </div>
</div>

<div class="box"> 
<div class="pda bdb hd"><strong>Watch the movie trailer (trailer)</strong></div>
 <div class="table full _nomob"> 
 <div class="td pda vat">
   <div id="yt_trailer" class="player">
     <div class="play p api">
     <iframe
          width="400"
          height="300"
          src={movies.find((el) => el.Title == name).imdbID}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      
       </div>
       </div>
       </div>
          </div>
          </div>

         
        <Link to="/">
          <button className="bnt">Back To home</button>
        </Link>
      </div>
      
    </div>
  );
};

export default MovieDetails;
