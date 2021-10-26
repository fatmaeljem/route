import React, { useState } from "react";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Add from "./Add";

const MovieListe = ({ movies ,addMovie}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return ( 
    <div>
      
      {movies.map((el) => (<MovieCard movie={el}/>))}
      <div >
      <Add addMovie={addMovie} show={show} handleClose={handleClose} />
        <Button id="add" onClick={handleShow}>Add Movie </Button>
      </div>
    </div>

  );
};

export default MovieListe;
