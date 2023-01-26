import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import { Jumbotron } from '../../components/Jumbotron/Jumbotron';
// import { FilterButtons } from '../../components/FilterButtons/FilterButtons';
import { getCountries, getCountryByName} from '../../redux/actions';

import style from './Home.module.css'

export const Home = (props) => {

  const dispatch = useDispatch();

  const [searchedCountry, setSearchedCountry] = useState([])


  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])
 

  // useEffect(() => {
  //   dispatch(getCountryByName(searchedCountry))
  // }, [dispatch, searchedCountry])
  


  const handleInputChange = (event)=>{
      let search = event.target.value
      setSearchedCountry(search)
      dispatch(getCountryByName(searchedCountry))
  }

  // const handleClick = () => {
  //   dispatch(getCountryByName(searchedCountry))
  // }

 
  return (
    <div className={style.container}>
      
      <Jumbotron />

        <div className={style.searchBar}>
            <input placeholder="Search a country by name ..."onChange={handleInputChange}  type='search' />
            <img src={require('../../images/searchIcon.png')} alt="SearchIcon" />
            {/* <button onClick={handleClick}>BUSCAR</button> */}
        </div>

      <CardsContainer />
    </div>
  )
}
