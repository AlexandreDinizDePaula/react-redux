import React from "react";
import {useSelector} from "react-redux"

export const NewsItem = () => {
    const news = useSelector(state => state.news)

    return(
        <div className="news-item">
            <p className="title">{news.artigo.title}</p>
            <p className="description">{news.artigo.description}</p>
            <img src={news.artigo.urlToImage } width="600" height="400" />
            <p className="content">{news.artigo.content}</p>
            <p className="foot">Autor: {news.artigo.author}</p>
            <p className="foot">Data de publicação: {news.artigo.publishedAt}</p>
        </div>
    )
}



