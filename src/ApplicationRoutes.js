import React from "react";
import { Route } from "react-router-dom";
import { MoviesList } from "./components/MoviesList";
import { MovieById } from "./components/MovieById";
import { FavoritesMovies } from "./components/FavoritesMovies";


export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={MoviesList} />
    <Route path="/movie/:id" exact component={MovieById} />
    <Route path="/favorites" exact component={FavoritesMovies} />
  </>
);
