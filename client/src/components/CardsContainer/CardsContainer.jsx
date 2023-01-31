import { useState } from "react"
import { useSelector } from "react-redux"
import { getCountriesAlphabetically, getCountriesbyContinent, getCountriesbyPopulation } from "../../helpers/filters"

import { Card } from "../Card/Card"
import { Pagination } from "../Pagination/Pagination"

import style from "./CardsCointainer.module.css"



export const CardsContainer = (props) => {
	const countriesDB =  useSelector(state=>state.countries)
  const searchedResults =  useSelector(state=>state.country) 


  const [filter, setFilter] = useState({
    continent: "All",
    orderBy: "alphabetically",
    order:"ASC"
  })




  //PAGINATION
  
  const [currentPage, setCurrentPage] = useState(0)
  const [page,setPage]= useState(1)

  const dataPerPage =  countriesDB.slice(currentPage, currentPage+10) 


  let dataToOrder = filter.continent === 'All' ? getCountriesbyContinent(dataPerPage , filter.continent) : getCountriesbyContinent(countriesDB , filter.continent).slice(currentPage, currentPage+10)

 
  const nextHandler = () => {
    setCurrentPage( currentPage + 10 )
    setPage(page+1)
  }

  const prevHandler = () => {
    currentPage > 0 && setCurrentPage( currentPage - 10 )
    currentPage > 2 && setPage(page-1)
  }

  const numberOfPages =[];

  let dataSize = filter.continent === 'All' ? countriesDB.length : getCountriesbyContinent(countriesDB , filter.continent).length

  for (let i = 1; i < Math.ceil(dataSize/10); i++) {
    numberOfPages.push(i) 
  }
  //////////////

  if (searchedResults.length >= 1) {dataToOrder = searchedResults}
 

  let alphabetically =  getCountriesAlphabetically(dataToOrder.slice(0,dataToOrder.length), filter.order)        
  let byPopulation = getCountriesbyPopulation(dataToOrder, filter.order)

  const changeHandler = (event) => {
    setCurrentPage(0)
    setPage(1)
    const property = event.target.name 
    const value = event.target.value
    setFilter({
      ...filter, 
      [property ]: value})
  }

  const pageSelectionHandler = (number) => {
    setPage(number)
    setCurrentPage(number*10)
  }


  return (
    <div className={style.container}>

        <div className={style.filterBar}>
          <form>
            <label htmlFor='continent'>Filter by Contintet </label>
            <select name="continent"  onChange={changeHandler}>
              <option value="All" >All Continents</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Antarctic">Antarctic</option>
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

        <div className={style.pagination}>
          <button onClick={prevHandler} disabled={page === 1 ? true:false}>prev</button>
            {
                numberOfPages.map(number => 
                  <button 
                    className={page === number ? style.pageNumberActive : style.pageNumber} 
                    key={number}
                    onClick={()=>pageSelectionHandler(number)}
                  >
                    {number}
                  </button>
                )
            }
          <button disabled={page === numberOfPages.length || !numberOfPages.length ? true:false} onClick={nextHandler}>next</button>
       </div>


      <div className={style.containerCards}>
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

