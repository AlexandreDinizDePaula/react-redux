export const SET_HOMECOUNTER = "SET_HOMECOUNTER"
export const INCREMENT_HOMECOUNTER = "INCREMENT_HOMECOUNTER"
export const SET_SPORTSCOUNTER = "SET_SPORTSCOUNTER"
export const INCREMENT_SPORTSCOUNTER = "INCREMENT_SPORTSCOUNTER"
export const SET_TECHNOLOGYCOUNTER = "SET_TECHNOLOGYCOUNTER"
export const INCREMENT_TECHNOLOGYCOUNTER = "INCREMENT_TECHNOLOGYCOUNTER"
export const SET_ENTERTAINMENTCOUNTER = "SET_ENTERTAINMENTCOUNTER"
export const INCREMENT_ENTERTAINMENTCOUNTER = "INCREMENT_ENTERTAINMENTCOUNTER"

export const setHomeCounter = homeCounter =>({
    type: SET_HOMECOUNTER,
    payload: homeCounter
})

export const incrementHomeCounter = () => ({
    type: INCREMENT_HOMECOUNTER
  });
  
export const setSportsCounter = sportsCounter =>({
    type: SET_SPORTSCOUNTER,
    payload: sportsCounter
})

export const incrementSportsCounter = () => ({
    type: INCREMENT_SPORTSCOUNTER
  });


export const setTechnologyCounter = technologyCounter =>({
    type: SET_TECHNOLOGYCOUNTER,
    payload: technologyCounter
})

export const incrementTechnologyCounter = () => ({
    type: INCREMENT_TECHNOLOGYCOUNTER
  });
  
export const setEntertainmentCounter = entertainmentCounter =>({
    type: SET_ENTERTAINMENTCOUNTER,
    payload: entertainmentCounter
})

export const incrementEntertainmentCounter = () => ({
    type: INCREMENT_ENTERTAINMENTCOUNTER
  });  