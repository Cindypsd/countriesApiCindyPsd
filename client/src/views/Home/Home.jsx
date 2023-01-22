import React, { useEffect, useState} from 'react'
import { useDispatch} from 'react-redux'
import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import { Jumbotron } from '../../components/Jumbotron/Jumbotron';
import { OrderButtons } from '../../components/OrderButtons/OrderButtons';

import { getCountries, getCountryByName} from '../../redux/actions';

import style from './Home.module.css'

export const Home = (props) => {

  const dispatch = useDispatch();

  const [searchedCountry, setSearchedCountry] = useState('')

  useEffect(() => {
    dispatch(getCountries())
    
  }, [dispatch])

  useEffect(() => {
    dispatch(getCountryByName(searchedCountry))
  }, [dispatch, searchedCountry])
  

  const handleInputChange = (event)=>{
      setSearchedCountry(
        event.target.value
     );
  }


  
  return (
    <div className={style.container}>
      
      <Jumbotron />

      <div className={style.searchBar}>
        <input placeholder="Search a country by name ..."onChange={handleInputChange}  type='search' />
        <img src='../images/searchIcon.png' alt="SearchIcon" />
      </div>

      
      
      <OrderButtons />
      <CardsContainer />
    </div>
  )
}
