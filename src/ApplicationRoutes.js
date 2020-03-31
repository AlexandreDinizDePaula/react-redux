import React from "react";
import { Route } from "react-router-dom";
import { HeadLinesBrasil } from "./components/Body/HeadlinesBrasil";
import { SportsNews} from "./components/Body/SportsNews"
import { TechnologyNews} from "./components/Body/TechnologyNews"
import { EntertainmentNews} from "./components/Body/EntertainmentNews"
import { NewsItem } from "./components/NewsItem"

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={HeadLinesBrasil} />
    <Route path="/esportes" exact component={SportsNews} />
    <Route path="/tecnologia" exact component={TechnologyNews} />
    <Route path="/entreterimento" exact component={EntertainmentNews} />
    <Route path="/noticia" component={NewsItem} />
  </>
);
