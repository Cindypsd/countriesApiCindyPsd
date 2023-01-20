import React, { useEffect} from 'react'
import { useDispatch} from 'react-redux'
import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import { OrderButtons } from '../../components/OrderButtons/OrderButtons';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { getCountries } from '../../redux/actions';

export const Home = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries())
  }, [dispatch])



  
  return (
    <div>
      <h1>Countries API</h1>
      <SearchBar/>
      <OrderButtons />
      <CardsContainer />
    </div>
  )
}
