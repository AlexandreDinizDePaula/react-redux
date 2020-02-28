import React,{useState, useEffect} from "react";
import {MoviesService} from "../services/MoviesService"

export const MovieById = (props) =>{
    const [movie, setMovie] = useState({data:{}})

    const requestMovie = async () => {
        const movieResult = await MoviesService.getMoviesById(props.match.params.id);
        setMovie(movieResult);
      };

    useEffect(() => {
        requestMovie();
    }, [])
    
    return (
        <p>
            {movie.data.title}
        </p>
      );
    
}