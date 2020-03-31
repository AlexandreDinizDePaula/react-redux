import React, { useState, useEffect } from "react";
import { NewsService } from "../../services/NewsService"
import { Link } from "react-router-dom"
import { setSportsArticle } from "../../actions/newsActions"
import { useDispatch } from "react-redux";
import { incrementSportsCounter } from "../../actions/counterActions"

export const SportsNews = () => {

  const [sportsNews, setSportNews] = useState({ data: { articles: [] } })
  const dispatch = useDispatch();

  const requestSportsNews = async () => {
    const sportsNewsResult = await NewsService.getSportNews();
    setSportNews(sportsNewsResult)
  }

  useEffect(() => {
    requestSportsNews();
    dispatch(incrementSportsCounter());
  }, [])

  return (
    <>
      <ul className="news-grid">
        {sportsNews.data.articles.map(news => (
          <li className="news-grid-item">
            <Link to={"/noticia/" + "noticia-selecionada"} onClick={() => dispatch(setSportsArticle(news))}>
              <img src={news.urlToImage} width="280px" height="150px" />
              <p>{news.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};