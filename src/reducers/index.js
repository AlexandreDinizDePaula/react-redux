import { combineReducers } from "redux";
import { news } from "./news";
import {counter} from "./counter"

export const reducers = combineReducers({
  news, counter
});
