import axios from "axios"

export const GET_COUNTRIES = "GET_COUNTRIES"
export const GET_COUNTRY ="GET_COUNTRY"

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