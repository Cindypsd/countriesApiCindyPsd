import { GET_COUNTRIES } from "./actions";

const intialState = {
  countries: [],
  activities: []
}

 const rootReducer= (state = intialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    default:
      return {...state};
  }
}

export default rootReducer