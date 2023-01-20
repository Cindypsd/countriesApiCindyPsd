import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCountry } from '../../redux/actions'




 const Detail = (props) => {
	 
	 const dispatch = useDispatch();
	 
	 const country = useSelector(state=>state.country)
	 let {id}= useParams()


  useEffect(() => {
    dispatch(getCountry(id))
  }, [dispatch,id])
	 

	 return (
		 <div>
  
      <h1>{country.name}</h1>
      <img src={country.flag} alt={`${country.name} flag`} />
      <p>Continent: {country.continet}</p>
      <p>Subregin: {country.subregion}</p>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km2</p>
      <p>Population: {country.population} km2</p>

      <h2>Activities</h2>
        {
          // Necesito entrar a las actividades bye
        }

      <Link to="/home">
        <button>Return to Home</button>
      </Link>
    </div>
  )
}




export default Detail