import React from "react";
import { useSelector } from "react-redux";

export const CounterPages = () => {
  const counter = useSelector(state => state.counter)

  return (
    <ul className="counterPages">  
        <li>Home: {counter.homeCount}</li>
        <li>Entreterimento: {counter.entertainmentCount}</li>
        <li>Esportes: {counter.sportsCount}</li>
        <li>Tecnologia: {counter.technologyCount}</li>
   </ul>
  );
};