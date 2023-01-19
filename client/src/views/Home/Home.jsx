import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import { getCountries } from '../../redux/actions';

export const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])
  

  return (
    <div>
      <h1>Esta es la vista de Home</h1>
      <CardsContainer/>
      </div>
  )
}
