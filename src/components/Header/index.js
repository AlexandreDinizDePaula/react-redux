import React from "react";
import { Nav } from "./Nav"
import { ButtonMob } from "./ButtonMob";



export const Header = () => {

  return (
    <div className="header">
      <ButtonMob></ButtonMob>
      <Nav></Nav>
    </div>
  );
};