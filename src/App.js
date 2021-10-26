import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter, Route } from "react-router-dom";
import React, { useState } from "react";
import MovieListe from "./MovieListe";
import MovieSearch from "./MovieSearch";
import Descrption from "./Descrption";

function App() {
  
  const [keyword, setkeyword] = useState("");
  const [newRate, setNewRate] = useState(1);
  const [movies, setMovies] = useState([
    {
      id: uuidv4(),
      img: "https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
      second_img:"https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg",
      title: "Bright",
      duration: "117 min",
      date: "2017, David Ayer",
      rate: 5,
      genre: "Action, Crime, Fantasy",
      trailer :"https://www.youtube.com/embed/6EZCBSsBxko",
      description:
        " Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for.",
    },
    {
      id: uuidv4(),
      img: "https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg",
      title: "Tomb Raider",
      duration: "125 min",
      date: "2018, Roar Uthaug",
      rate: 4,
      genre: "Action, Fantasy",
      trailer: "https://www.youtube.com/watch?v=6EZCBSsBxko",
      description:
        "  Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared.",
    },

    {
      id: uuidv4(),
      img: "https://mr.comingsoon.it/imgdb/locandine/235x336/53715.jpg",
      title: "Black Panther",
      duration: "134 min",
      date: "2018, Ryan Coogler",
      rate: 3,
      genre: "Action, Adventure, Sci-Fi",
      trailer: "https://www.youtube.com/watch?v=xjDjIWPwcPU",
      description:
        " T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake. ",
    },
  ]);
  const search = (text) => {
    setkeyword(text);
  };
  const setRate = (rate) => {
    setNewRate(rate);
  };
  const addMovie = (movie) => {
    setMovies(movies.concat(movie));
  };

  return (
    <div className="App">
      <div classname="container">
        <BrowserRouter>
          <MovieSearch search={search} setRate={setRate} newRate={newRate} />
          <Route
            exact
            path="/descrption/:id" render ={(props)=><Descrption {...props} movies={movies}/>} 
         />
          <MovieListe
            addMovie={addMovie}
            movies={movies.filter(
              (el) =>
                el.rate >= newRate &&
                el.title.toLowerCase().includes(keyword.toLowerCase().trim())
            )}
          />
          
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
