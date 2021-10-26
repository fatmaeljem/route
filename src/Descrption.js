import React ,{useState}from 'react'

const Descrption = (props) => {
const [movie, setMovie] = useState(props.movies.filter(el=>el.id===props.match.params.id)[0])

console.log(props)
  return (

    <div>
       
      { movie && <p id="p"> Description   : {movie.description} </p> }
      <button id="button" onClick={()=>props.history.goBack()}>back</button>

      { movie &&  
      <iframe id="url"
            src={movie.trailer}
            title="YouTube video player"
            ></iframe>   }   
    </div>
  )
}

export default Descrption
































// // import { Link} from "react-router-dom";
// import React from "react";

// const Descrption  {
//   return (
//     <div className="movie-card">
      
//     </div>
//   );
// };

// export default Descrption;

/* <br />
      <div>{movie.description}</div>
      <br />
      <br />
      <Rating ratingValue={movie.rate} /* Rating Props */ 
      // <button>
      //   <Link to={"/"}>Back</Link>
      // </button> */