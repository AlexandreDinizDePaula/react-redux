import React from "react";
import { Link } from "react-router-dom"

export function Nav() {
  return (
    
      
      <div className="nav">
        <ul>
          <li><img src="/img/Logo.png" /></li>
          <li> <Link to="/">Inicial</Link></li>
          <li> <Link to="/esportes">Esportes</Link></li>
          <li> <Link to="/tecnologia">Tecnologia</Link></li>
          <li> <Link to="/entreterimento">Entreterimento</Link></li>
        </ul>
      </div>
    

  );
}; 