
import { useState } from "react"
import { useSelector } from "react-redux"
import { Card } from "../Card/Card"
import { PagingButtons } from "../PagingButtons/PagingButtons"

import style from "./CardsCointainer.module.css"


export const CardsContainer = () => {
	const countries =  useSelector(state=>state.countries) 

  let countriesPerPage = 10 

  // const [countriesDB, setCountriesDB] = useState(countries)               10
  const [countriesData, setCountriesData] = useState([...countries].splice(10, countriesPerPage)) 
  const [currentPage, setCurrentPage] = useState(0)

  const nexHandler = () => {
    const allCountries = countries.length; //100 paises
    const nextPage = currentPage + 1; //2
    const firstIndex = nextPage * countriesPerPage; // 2*10 // 10

    if (firstIndex === allCountries) return;
                                               
    setCountriesData([...countries].splice(firstIndex, countriesPerPage))
    setCurrentPage(nextPage)
  }

  const prevHandler = () => {
    const prevPage = currentPage-1;

    if(prevPage<0) return;
    const firstIndex = prevPage * countriesPerPage;

    setCountriesData([...countries].splice(firstIndex, countriesPerPage))
    setCurrentPage(prevPage)
  }
  
  return (
    <div>
      <div>
        <PagingButtons nexHandler={nexHandler} currentPage={currentPage} prevHandler={prevHandler}/>
      </div>
    
     
      <div className={style.container}>
        {
          countriesData.map(country=>{
            return <Card
                key={country.id}
                id={country.id}
                name={country.name}
                flag={country.flag}
                continet ={country.continet}
            />
            })
        }
      </div>
    </div>
  )
}


