import { SET_HEADLINES_ARTICLE, SET_SPORTS_ARTICLE, SET_TECHNOLOGY_ARTICLE, SET_ENTERTAINMENT_ARTICLE } 
from "../actions/newsActions"

const initialState = {
    artigo: {},
};

export const news = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADLINES_ARTICLE:
            return {
                ...state,
                artigo: action.payload
            };

        case SET_SPORTS_ARTICLE:
            return {
                ...state,
                artigo: action.payload
            };

        case SET_TECHNOLOGY_ARTICLE:
            return {
                ...state,
                artigo: action.payload
            };

        case SET_ENTERTAINMENT_ARTICLE:
            return {
                ...state,
                artigo: action.payload
            };
        default:
            return state;
    }
}