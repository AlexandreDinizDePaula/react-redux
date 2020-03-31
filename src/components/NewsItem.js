import React from "react";
import {useSelector} from "react-redux"

export const NewsItem = () => {
    const news = useSelector(state => state.news)

    return(
        <div>
            <h1>{news.artigo.title}</h1>
            <h3>{news.artigo.description}</h3>
            <p>{news.artigo.content}</p>
        </div>
    )
}


