import React, { useState, useEffect } from "react";
import { NewsService } from "../../services/NewsService"
import { Link } from "react-router-dom"
import { setEntertainmentArticle } from "../../actions/newsActions"
import { useDispatch } from "react-redux";
import { incrementEntertainmentCounter } from "../../actions/counterActions"

export const EntertainmentNews = () => {

  const dispatch = useDispatch();
  const [entertainmentNews, setEntertainmentNews] = useState({ data: { articles: [] } })

  const requestEntertainmentNews = async () => {
    const entertainmentNewsResult = await NewsService.getEntertainment();
    setEntertainmentNews(entertainmentNewsResult)
  }

  useEffect(() => {
    requestEntertainmentNews();
    dispatch(incrementEntertainmentCounter());
  }, [])

  return (
    <>
      <ul className="news-grid">
        {entertainmentNews.data.articles.map(news => (
          <li className="news-grid-item">
            <Link to={"/noticia/" + "noticia-selecionada"} onClick={() => dispatch(setEntertainmentArticle(news))}>
              <img src={news.urlToImage} width="280px" height="150px" />
              <p>{news.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};