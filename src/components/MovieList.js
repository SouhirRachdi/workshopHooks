import React ,{useEffect, useState} from 'react';
import MovieCard from './MovieCard';


const MovieList = ({search,frating,movies,handelDelet}) => {
  
  
  
  return(
<div style={{marginTop:'150px'}}>
    {movies.filter(movie => movie.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && movie.rating >= frating).map((el,i)=> <MovieCard   handelDelet={handelDelet} key={i} movie={el}  /> )}
  
</div>
  ) ;
};
export default MovieList;
