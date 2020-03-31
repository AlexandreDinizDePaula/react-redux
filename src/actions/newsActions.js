export const SET_HEADLINES_ARTICLE = "SET_HEADLINES_ARTICLE"
export const SET_SPORTS_ARTICLE = "SET_SPORTS_ARTICLE"
export const SET_TECHNOLOGY_ARTICLE = "SET_TECHNOLOGY_ARTICLE"
export const SET_ENTERTAINMENT_ARTICLE = "SET_ENTERTAINMENT_ARTICLE"

export const setHeadlinesArticle = article =>({
    type: SET_HEADLINES_ARTICLE,
    payload: article
})

export const setSportsArticle = article =>({
    type: SET_SPORTS_ARTICLE,
    payload: article
})

export const setTechnologyArticle = article =>({
    type: SET_TECHNOLOGY_ARTICLE,
    payload: article
})

export const setEntertainmentArticle = article =>({
    type: SET_ENTERTAINMENT_ARTICLE,
    payload: article
})