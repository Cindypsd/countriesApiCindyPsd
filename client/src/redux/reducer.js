import { GET_COUNTRIES, GET_COUNTRY, GET_COUNTRY_BY_NAME } from "./actions";

const intialState = {
  countries: [],
  activities: [],
  country:{}
}


//Reducer recibe -> ACTION & EDO INICIAL
// crea un obj c/una copia d'estado + info de action ==> cambia el estado
 const rootReducer= (state = intialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload
      }
    case GET_COUNTRY:
      return{
        ...state,
        country: action.payload
      }
    case GET_COUNTRY_BY_NAME:
      return{
        ...state,
        country: action.payload
      }

    
    default:
      return {...state};
  }
}

export default rootReducer