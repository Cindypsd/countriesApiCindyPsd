import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import style from "./PagingButtons.module.css"

export const PagingButtons = (props) => {

  const countries =  useSelector(state=>state.countries) 
	

  let countriesPerPage = 10 
  const [dataPerPage, setDataPerPage] = useState([...countries].splice(10, countriesPerPage)) 
  const [currentPage, setCurrentPage] = useState(0)

  const nexHandler = () => {
    const allCountries = countries.length; //100 paises
    const nextPage = currentPage + 1; //2
    const firstIndex = nextPage * countriesPerPage; // 2*10 // 10

    if (firstIndex === allCountries) return;
                                               
    setDataPerPage([...countries].splice(firstIndex, countriesPerPage))
    setCurrentPage(nextPage)
  }

  const prevHandler = () => {
    const prevPage = currentPage-1;

    if(prevPage<0) return;
    const firstIndex = prevPage * countriesPerPage;

    setDataPerPage([...countries].splice(firstIndex, countriesPerPage))
    setCurrentPage(prevPage)
  }


  return (
    <div className={style.container}>
      <p>Page: {currentPage}/24</p>
      <div>
        <button onClick={prevHandler}>Atras</button>
        <button onClick={nexHandler}>Siguiente</button>
      </div>
    </div>
  )
}
