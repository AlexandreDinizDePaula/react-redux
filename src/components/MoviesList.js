import React,{useState, useEffect} from "react";
import {MoviesService} from "../services/MoviesService"
import {Link} from "react-router-dom"

import { useDispatch } from "react-redux";
import { setFavorite } from "../actions/favoritesActions"

export const MoviesList = () => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState({data: {results:[]}})
  
  const requestMovies = async () => {
    const moviesResult = await MoviesService.getPopularMovies();
    setMovies(moviesResult);
  };

  useEffect(() => {
    requestMovies();
  }, [])
  
  return (
    <>
    <Link to={"/favorites"}>Favoritos</Link>
    <ul>
      {movies.data.results.map(movie => (
        <li>
        <Link to={"/movie/" + movie.id}>{movie.title}</Link> 
        <button style={{backgroundColor: "black", color: "white"}} 
        onClick={() => dispatch(setFavorite(movie.title)) }>+</button>
        </li>
      ))}
    </ul>
   </>
  );
};
