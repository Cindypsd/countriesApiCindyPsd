import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getCountry } from '../../redux/actions'

import style from './Detail.module.css'




 const Detail = (props) => {
	 
	 const dispatch = useDispatch();
	 
	 const country = useSelector(state=>state.country)
	 let {id}= useParams()


  useEffect(() => {
    dispatch(getCountry(id))
  }, [dispatch,id])
	 

	 return (
		 <div className={style.containerDetails}>
  
      <div className={style.titleFlag}>
        <h1>{country.name}</h1>
        <img src={country.flag} alt={`${country.name} flag`} />
      </div>
      
      <div className={style.extraInfoBox}>
        <p>Continent: {country.continet}</p>
        <p>Subregin: {country.subregion}</p>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area} km2</p>
        <p>Population: {country.population} km2</p>
      </div>
      
      <h2>Activities</h2>
      <div className={style.activitiesCointainer}>
          
            {
            
              country.Activities && country.Activities.length === 0 ?  <p>There is no activities for this country YET, if you want you could add one  
                <Link to="/create">
                <span>HERE</span>
                </Link>
                </p>
                : country.Activities && country.Activities.map(activity=>
                  <div key={activity.id} className={style.activitiesBox}>
                    <p>Activity: {activity.name}</p>
                    <p>Level: {activity.level}</p>
                    <p>Duration: {activity.duration} minutes</p>
                    <p>Season: {activity.season}</p>

                  </div>
                )
              
                
            }
         
      </div>

      <Link to="/home">
        <button>Return to Home</button>
      </Link>
    </div>
  )
}




export default Detail