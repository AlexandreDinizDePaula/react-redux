import React from "react";
import "./styles.css";
import { Header } from "./components/Header/index";
import { Body } from "./components/Body/index";
import { Footer } from "./components/Footer/index";


export default function App() {
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

