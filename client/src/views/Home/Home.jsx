import React, {useEffect, useState} from 'react'
import { useDispatch} from 'react-redux'
import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import { Jumbotron } from '../../components/Jumbotron/Jumbotron';
import { getCountries, getCountryByName} from '../../redux/actions';

import style from './Home.module.css'

export const Home = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch]) 
  
  const [searchedCountry, setSearchedCountry] = useState([])

  const handleInputChange = (event)=>{
      let search = event.target.value
      setSearchedCountry(search)
      dispatch(getCountryByName(searchedCountry))
  }

 
  return (
    <div className={style.container}>
      
      <Jumbotron />

        <div className={style.searchBar}>
            <input placeholder="Search a country by name ..."onChange={handleInputChange}  type='search' />
            <img src={require('../../images/searchIcon.png')} alt="SearchIcon" />
        </div>

      <CardsContainer />

    </div>
  )
}
