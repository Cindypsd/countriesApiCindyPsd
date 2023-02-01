import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import { Jumbotron } from '../../components/Jumbotron/Jumbotron';
import { getCountries, getCountryByName} from '../../redux/actions';

import style from './Home.module.css'

export const Home = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch]) 



  ///SearchBar
  const [searchedCountry, setSearchedCountry] = useState([])
  const [searched, setSearched]= useState(false)

  const handleInputChange = (event)=>{
      let search = event.target.value
      setSearchedCountry(search)
    }
  
    
    const handleClick= () => {
      dispatch(getCountryByName(searchedCountry))
      setSearched(true)
    }
    ///////////
    
  let searchedResults =  useSelector(state=>state.country)


  return (
    <div className={style.container}>
      
      <Jumbotron />

        <div className={style.searchBar}>
            <input onChange={handleInputChange}placeholder="Search a country by name ..." type='search' />
            <button className={style.searchButton}onClick={handleClick}><img src={require('../../images/searchIcon.png')} alt="SearchIcon" /></button>  
        </div>


      <CardsContainer searchedCountry={searchedCountry} searchedResults={searchedResults} searched={searched}/>

    </div>
  )
}
