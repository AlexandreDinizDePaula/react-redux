import React, { useState, useEffect } from "react";
import { NewsService } from "../../services/NewsService"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { setHeadlinesArticle } from "../../actions/newsActions"
import { incrementHomeCounter } from "../../actions/counterActions"


export const HeadLinesBrasil = (props) => {
  const dispatch = useDispatch();

  const [headlines, setHeadlines] = useState({ data: { articles: [] } })
  const requestHeadlines = async () => {
    const headlinesResult = await NewsService.getBrasilHeadlines();
    setHeadlines(headlinesResult);
  };

  useEffect(() => {
    requestHeadlines();
    dispatch(incrementHomeCounter());
  }, [])

  return (
    <>
      <ul className='news-grid'>
        {headlines.data.articles.map(news => (
          <li className="news-grid-item">
            <Link to={"/noticia/" + "noticia-selecionada"} onClick={() => dispatch(setHeadlinesArticle(news))}>
              <img src={news.urlToImage} width="280px" height="150px" />
              <p>{news.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
};
