import React, { useState, useEffect } from "react";
import { NewsService } from "../../services/NewsService"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setTechnologyArticle } from "../../actions/newsActions"
import { incrementTechnologyCounter } from "../../actions/counterActions"

export const TechnologyNews = () => {

  const [technologyNews, setTechnologyNews] = useState({ data: { articles: [] } })
  const dispatch = useDispatch();

  const requestTechnologyNews = async () => {
    const technologyNewsResult = await NewsService.getTechnologyNews();
    setTechnologyNews(technologyNewsResult)
  }

  useEffect(() => {
    requestTechnologyNews();
    dispatch(incrementTechnologyCounter());
  }, [])

  return (
    <>
      <ul className="news-grid">
        {technologyNews.data.articles.map(news => (
          <li className="news-grid-item">
            <Link to={"/noticia/" + "noticia-selecionada"} onClick={() => dispatch(setTechnologyArticle(news))}>
              <img src={news.urlToImage} width="280px" height="150px" />
              <p>{news.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};