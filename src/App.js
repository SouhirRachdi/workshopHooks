import React, { useState } from "react";
import Add from "./components/Add";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom";
import "./App.css";


import MovieDetails from "./components/MovieDetails";

function App() {
  const [movies,setMovies] = useState([
    { 
    Title:'Peaky Blinders',
    description:'Peaky Blinders is a British television series created by Steven Knight and first broadcast on September 12, 2013 on BBC Two, then on BBC One since August 25, 2019, for the fifth season.',
    posterURL:'https://i.pinimg.com/originals/10/d4/f7/10d4f7c11d90cbed7bac9c7c5f1e03b1.jpg',
    rating:100,
    language:"Englich Movie",
    translation: "Arabic translator" ,
    duration:"1h.5",
    type:"action",
    imdbID:"https://www.youtube.com/embed/2nsT9uQPIrk"
    } ,
    {
        Title:'Harry Potter',
        description:' film series is an American-British fantasy series produced by Warner Bros,Started in 2001, it ends in 2011 with the release of the last opus, split into two parts. The lead roles, Harry Potter, Ron Weasley and Hermione Granger, are played throughout production by British actors Daniel Radcliffe, Rupert Grint and Emma Watson respectively.',
        posterURL:'https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg',
        rating:80,
        language:"Englich Movie",
        translation: "Arabic translator" ,
    duration:"2h.5",
    type:"imagination",
        imdbID:"https://www.youtube.com/embed/wrMb0o6hlDQ"
    } ,
    {
        Title:'Spider-Man',
        description:' Spider-man is an American film directed by Jon Watts, released in 2021, The comic book had already been adapted into a television series in the 1970s, three episodes of which, Spider-Man, The Spider-Man Riposte and Spider-Man Defies the Dragon, were released in France. in cinemas.',
        posterURL:'https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg',
        rating:50 ,
        language:"Englich Movie",
        translation: "Arabic translator" ,
    duration:"1h.5",
    type:"imagination",
        imdbID:"https://www.youtube.com/embed/JfVOs4VSpmA"   
    },
    {
      Title:'Malcolm & Marie',
      description:'is a film directed by Sam Levinson starring John David Washington,Zendaya.',
      posterURL:'https://imgsrc.cineserie.com/2020/11/1728134.jpg?ver=1',
      rating:40,
      language:"Englich Movie",
      translation: "Arabic translator" ,
    duration:"2h.45",
    type:"Romantic",
      imdbID :"https://www.youtube.com/embed/CGZmwsK58M8"  
    },
    {
      Title:'Bliss',
      description:'Bliss is a 2021 American drama film written and directed by Mike Cahill.',
      posterURL:'https://fr.web.img4.acsta.net/pictures/21/01/13/07/43/4660253.jpg',
      rating:89 ,
      language:"Englich Movie",
      translation: "Arabic translator" ,
    duration:"1h.30",
    type:"Comedy",
      imdbID:"https://www.youtube.com/embed/ZHtPm8v-yNw"
    },
    {
      Title:'Lolita',
      description:'Lolita is a Franco-American film directed by Adrian Lyne,released in 1997.Humbert Humbert, a professor of French literature, is looking to rent a room for the summer in New Hampshire.',
      posterURL:'https://img2.film7.hu/original/eQUnK3828qLFwduB0skCNcB20fZ.jpg',
      rating:99,
      language:"Englich Movie",
      translation: "Arabic translator" ,
    duration:"2h",
    type:"Romantic",
      imdbID:"https://www.youtube.com/embed/vaO_L0n0zhc"
    },
    {
      Title:'Mulan',
      description:'is the 54th animated feature film “Animated Classic” from Disney Studios.',
      posterURL:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWyPVTOL7zYHoZFBZx0s9l8JthWA63ZzzmiukpEe0WdG8ymk8L',
      rating:80,
      language:"Englich Movie",
      translation: "Arabic translator" ,
    duration:"1h.5",
    type:"action",
      imdbID :"https://www.youtube.com/embed/KK8FHdFluOQ"
    },
    {
      Title:'Bridgerton',
      description:'is set in the sexy,lavish and competitive world of Regency London high society.In Regency England, eight siblings close to the powerful Bridgerton family try to find love. ',
      posterURL:'https://static1.showtimes.com/poster/660x980/bridgerton-netflix-149758.jpg',
      rating:70,
      language:"Englich Movie",
      translation: "Arabic translator" ,
      duration:"2h.35",
      type:"Romantic",
      imdbID :"https://www.youtube.com/embed/gpv7ayf_tyE"
    }
])

const handelDelet=(titleDelet)=>{
setMovies(movies.filter(el=>el.Title!= titleDelet))
}


  const [frating, setFrating] = useState(0);
  const handelRating = (z) => {
    setFrating(z);
  };

  const [search, setSearch] = useState("");
  const handelFilter = (searchValue) => {
    setSearch(searchValue);
  };

  const [addMovie, setAddMovie] = useState("");
  const handelAdd = (x) => {
    setMovies([...movies,x])
  };

  return (
    <div className="App">
     
      <Routes>
        <Route
          path="/" element={ <div><Filter handelRating={handelRating} handelFilter={handelFilter} />
            <MovieList frating={frating} handelDelet={handelDelet} movies={movies} search={search} /> <Add handelAdd={handelAdd} /> </div> 
          }  />
         <Route path ="/Movielist"  element={<MovieList frating={frating} handelDelet={handelDelet} movies={movies} search={search} />} />
        <Route path="/movie/:name" element={<MovieDetails  movies={movies}/>} />
      </Routes>
    </div>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);
export default App;
