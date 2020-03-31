export const SET_HEADLINES_ARTICLE = "SET_HEADLINES_ARTICLE"
export const SET_SPORTS_ARTICLE = "SET_SPORTS_ARTICLE"
export const SET_TECHNOLOGY_ARTICLE = "SET_TECHNOLOGY_ARTICLE"
export const SET_ENTERTAINMENT_ARTICLE = "SET_ENTERTAINMENT_ARTICLE"

export const setHeadlinesArticle = headlines =>({
    type: SET_HEADLINES_ARTICLE,
    payload: headlines
})

export const setSportsArticle = sports =>({
    type: SET_SPORTS_ARTICLE,
    payload: sports
})

export const setTechnologyArticle = tech =>({
    type: SET_TECHNOLOGY_ARTICLE,
    payload: tech
})

export const setEntertainmentArticle = artigo =>({
    type: SET_ENTERTAINMENT_ARTICLE,
    payload: artigo
})
