import{SET_FAVORITE} from "../actions/favoritesActions"

const initialState = {
    fav: []
  };

export const favorites = (state = initialState, action) =>{
    switch (action.type){
        case SET_FAVORITE:
            return{
                ...state,
                fav: [...state.fav, action.payload]
            };
        default:
            return state;    
    }
}