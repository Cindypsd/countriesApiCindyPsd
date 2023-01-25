import { useState } from "react"
import { useSelector } from "react-redux"
import { getCountriesAlphabetically, getCountriesbyContinent, getCountriesbyPopulation } from "../../helpers/filters"

import { Card } from "../Card/Card"
import { Pagination } from "../Pagination/Pagination"

import style from "./CardsCointainer.module.css"



export const CardsContainer = () => {
	const countriesDB =  useSelector(state=>state.countries) 
	const country =  useSelector(state=>state.country)

  const [filter, setFilter] = useState({
    continent: "All",
    orderBy: "alphabetically",
    order:"ASC"
  })

  const changeHandler = (event) => {
    const property = event.target.name 
    const value = event.target.value

    setFilter({
      ...filter, 
      [property ]: value})
   
  }
 

  let dataToFilter = !country.length ? getCountriesbyContinent(countriesDB, filter.continent) : country
                  
  let alphabetically =  getCountriesAlphabetically(dataToFilter.slice(0,250), filter.order)        
  let byPopulation = getCountriesbyPopulation(dataToFilter, filter.order)

  

  return (
    <div>
        <div className={style.filterBar}>
          <form>
            <label htmlFor='continent'>Filter by Contintet </label>
            <select name="continent"  onChange={changeHandler}>
              <option value="All" >All Continents</option>
              <option value="Americas">Americas</option>
              <option value="Africa">Africa</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>


            <label htmlFor='orderBy'>Order by </label>
            <select  name='orderBy' onChange={changeHandler}>
              <option value="alphabetically">Alphabetically</option>
              <option value="population">Population</option>
            </select>


            <input onChange={changeHandler} type="radio" id='ASC' name='order' value='ASC' defaultChecked/>
            <label htmlFor='ASC'>⬆️</label>

            <input onChange={changeHandler} type="radio" id='DES' name='order' value='DES'/>
            <label htmlFor='DES'>⬇️</label>
         
          </form>
        </div>

     

      <div className={style.container}>
        {  
          
            filter.orderBy === 'alphabetically' ?
            alphabetically.map(country=>{
              return <Card
                  key={country.id}
                  id={country.id}
                  name={country.name}
                  flag={country.flag}
                  continet ={country.continet}
              />
            }):
            byPopulation.map(country=>{
              return <Card
                  key={country.id}
                  id={country.id}
                  name={country.name}
                  flag={country.flag}
                  continet ={country.continet}
              />
            })
              // country && country.map(country=>{
              // return <Card
              //     key={country.id}
              //     id={country.id}
              //     name={country.name}
              //     flag={country.flag}
              //     continet ={country.continet}
              // />
              // })
        }
      </div>

    </div>
  )
}


 // !country.length ? dataToFilter.map(country=>{
          //   return <Card
          //       key={country.id}
          //       id={country.id}
          //       name={country.name}
          //       flag={country.flag}
          //       continet ={country.continet}
          //   />
          //   }) : 

          //   country && country.map(country=>{
          //     return <Card
          //         key={country.id}
          //         id={country.id}
          //         name={country.name}
          //         flag={country.flag}
          //         continet ={country.continet}
          //     />
          //   })

