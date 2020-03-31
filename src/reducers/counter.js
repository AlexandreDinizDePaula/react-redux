import {
  SET_HOMECOUNTER,
  INCREMENT_HOMECOUNTER,
  SET_ENTERTAINMENTCOUNTER,
  INCREMENT_ENTERTAINMENTCOUNTER,
  SET_SPORTSCOUNTER,
  INCREMENT_SPORTSCOUNTER,
  SET_TECHNOLOGYCOUNTER,
  INCREMENT_TECHNOLOGYCOUNTER
} from "../actions/counterActions";

const initialState = {
  homeCount: 0,
  sportsCount: 0,
  entertainmentCount: 0,
  technologyCount: 0
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOMECOUNTER:
      return {
        ...state,
        homeCount: action.payload
      };
    case INCREMENT_HOMECOUNTER:
      return {
        ...state,
        homeCount: state.homeCount + 1
      }

    case SET_ENTERTAINMENTCOUNTER:
      return {
        ...state,
        entertainmentCount: action.payload
      }

    case INCREMENT_ENTERTAINMENTCOUNTER:
      return {
        ...state,
        entertainmentCount: state.entertainmentCount + 1
      }

    case SET_SPORTSCOUNTER:
      return {
        ...state,
        sportsCount: action.payload
      };
    case INCREMENT_SPORTSCOUNTER:
      return {
        ...state,
        sportsCount: state.sportsCount + 1
      }

    case SET_SPORTSCOUNTER:
      return {
        ...state,
        sportsCount: action.payload
      };
    case INCREMENT_SPORTSCOUNTER:
      return {
        ...state,
        sportsCount: state.sportsCount + 1
      }

    case SET_TECHNOLOGYCOUNTER:
      return {
        ...state,
        technologyCount: action.payload
      };
    case INCREMENT_TECHNOLOGYCOUNTER:
      return {
        ...state,
        technologyCount: state.technologyCount + 1
      }
    default:
      return state;
  }
};
