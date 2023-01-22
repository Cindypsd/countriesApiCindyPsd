import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRY ="GET_COUNTRY"
export const GET_COUNTRY_BY_NAME = "GET_COUNTRY_BY_NAME"


//Actions dice QUE hace y con que INFO | dispatch para mandar cambios
export const getCountries = () => {
  return async (dispatch) => {
    const DBdata = await axios.get(
      "http://localhost:3001/countries"
    )
    const countries = DBdata.data;
    dispatch({type: GET_COUNTRIES, payload: countries})
  }
}

export const getCountry = (id) => {
  return async (dispatch) => {
    const DBdata = await axios.get(
      `http://localhost:3001/countries/${id}`
    )
    const country = DBdata.data;
    dispatch({type: GET_COUNTRY, payload: country})
  }
}

export const getCountryByName = (name) => {
  return async (dispatch) => {
    const DBdata = await axios.get(
      `http://localhost:3001/countries?name=${name}`
    )
    const country = DBdata.data;
    dispatch({type: GET_COUNTRY_BY_NAME, payload: country})
  }
}