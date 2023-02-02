import { useState } from "react"
import { useSelector } from "react-redux"
import { getCountriesAlphabetically, getCountriesbyContinent, getCountriesbyPopulation } from "../../helpers/filters"

import { Card } from "../Card/Card"

import style from "./CardsCointainer.module.css"



export const CardsContainer = ({searchedCountry, searchedResults, searched}) => {
	const countriesDB =  useSelector(state=>state.countries)

  const [filter, setFilter] = useState({
    continent: "All",
    orderBy: "alphabetically",
    order:"ASC",
    filterbyActivity: ""
  })


  //PAGINATION
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [page,setPage]= useState(1)


  let dataToOrder = searchedResults.length >= 1 ? searchedResults: getCountriesbyContinent(countriesDB , filter.continent).slice(currentIndex, currentIndex+10)
 
  

  const nextHandler = () => {
    setCurrentIndex( currentIndex + 10 )
    setPage(page+1)
  }

  const prevHandler = () => {
    currentIndex > 0 && setCurrentIndex( currentIndex - 10 )
    currentIndex > 2 && setPage(page-1)
  }

  const numberOfPages =[];

  let dataSize = filter.continent === 'All' ? countriesDB.length : getCountriesbyContinent(countriesDB , filter.continent).length
  if (searchedResults.length >= 1) {dataSize = searchedResults}

  for (let i = 1; i < Math.ceil(dataSize/10); i++) {
    numberOfPages.push(i) 
  }

  const pageSelectionHandler = (number) => {
    setPage(number)
    setCurrentIndex(number*10)
  }
  //////////////

  let allCountriesDataAZ = getCountriesAlphabetically(countriesDB.slice(0,countriesDB.length), filter.order)

  let allCountriesDataPop = getCountriesbyPopulation(countriesDB.slice(0,countriesDB.length), filter.order)
  


  let alphabetically =  filter.continent === 'All' ?  allCountriesDataAZ.slice(currentIndex, currentIndex+10) : getCountriesAlphabetically(dataToOrder.slice(0,dataToOrder.length), filter.order)        
  
  let byPopulation = filter.continent === 'All' ?  allCountriesDataPop.slice(currentIndex, currentIndex+10) :  getCountriesbyPopulation(dataToOrder.slice(0,dataToOrder.length), filter.order)
 

  const changeHandler = (event) => {
    setCurrentIndex(0)
    setPage(1)
    const property = event.target.name 
    const value = event.target.value
    setFilter({
      ...filter, 
      [property ]: value})
  }

  



  return (
    <div className={style.container}>


      {
        !searched  ? 
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
          

              <button onClick={changeHandler} name="filterbyActivity">Act - de 4hrs</button>
            
            </form>

            <div className={style.pagination}>
            <button 
              onClick={prevHandler} disabled={page === 1 ? true:false}
              className={style.arrowsPagination}
              >←
            </button>
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
            <button 
              disabled={page === numberOfPages.length || !numberOfPages.length ? true:false} 
              onClick={nextHandler}
              className={style.arrowsPagination}
              > → 
            </button>
        </div>
          </div>
        :
          <div> 
              {searched && searchedResults.length === 0 && <h2 className={style.notFoundMsg}>Country <span>"{searchedCountry.toUpperCase()}"</span> not found</h2>}
              <button onClick={() => window.location.reload(false)} className={style.returnButton}>Return</button>
          </div>
        }


        
          
          <div className={searched && searchedResults.length === 0 ? style.noDisplay :style.containerCards}>
          {  

              dataToOrder === searchedResults ?  dataToOrder.map(country=>{
                return <Card
                    key={country.id}
                    id={country.id}
                    name={country.name}
                    flag={country.flag}
                    continet ={country.continet}
                />
              }) :

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


