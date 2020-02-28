import React from "react";
import { useSelector } from "react-redux";

export const FavoritesMovies = () =>{
    const favorites = useSelector(state => state.favorites);
    console.log(favorites)
    return (
    <ul>
      { favorites.fav.map(movie => (
        <li>
            {movie}
        </li>
      ))}
    </ul>
  );
}