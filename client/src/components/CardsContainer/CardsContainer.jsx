import { useState } from "react"
import { useSelector } from "react-redux"
import { getCountriesAlphabetically, getCountriesbyContinent, getCountriesbyPopulation } from "../../helpers/filters"

import { Card } from "../Card/Card"

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
  
  const [currentIndex, setCurrentIndex] = useState(0)
  const [page,setPage]= useState(1)

  const dataPerPage =  countriesDB.slice(currentIndex, currentIndex+10) 


  let dataToOrder = filter.continent === 'All' ? getCountriesbyContinent(dataPerPage , filter.continent) : getCountriesbyContinent(countriesDB , filter.continent).slice(currentIndex, currentIndex+10)

 
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

  for (let i = 1; i < Math.ceil(dataSize/10); i++) {
    numberOfPages.push(i) 
  }

  const pageSelectionHandler = (number) => {
    setPage(number)
    setCurrentIndex(number*10)
  }
  //////////////

  if (searchedResults.length >= 1) {dataToOrder = searchedResults}
 

  let alphabetically =  getCountriesAlphabetically(dataToOrder.slice(0,dataToOrder.length), filter.order)        
  let byPopulation = getCountriesbyPopulation(dataToOrder, filter.order)

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

