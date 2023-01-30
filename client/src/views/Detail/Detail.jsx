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
    <>
		 <div className={style.containerDetails}>
  
      <div className={style.titleFlag}>
        <img src={country.flag} alt={`${country.name} flag`} />
        <h1>{country.name}</h1>
      </div>
      
      
      <div className={style.continent}>
          <p>Continent:</p>
          <h2>{country.continet}</h2>
          {country.continet === 'Americas' && <img src={require('../../images/americasMap.png')} alt="America Map" />}
          {country.continet === 'Africa' && <img src={require('../../images/africaMap.png')} alt="Africa Map" />}
          {country.continet === 'Asia' && <img src={require('../../images/asiaMap.png')} alt="Asia Map" />}
          {country.continet === 'Europe' && <img src={require('../../images/europaMap.png')} alt="Europe Map" />}
          {country.continet === 'Oceania' && <img src={require('../../images/oceaniaMap.png')} alt="Oceania Map" />}
          {country.continet === 'Antarctic' && <img src={require('../../images/antarticMap.png')} alt="Antartic Map" />}
      </div>
     
      <div className={style.extraInfoBox}>

      

        <div className={style.subregion}>
          <p>Subregion:</p>
          <h2>{country.subregion}</h2>
        </div>

        <div className={style.capital}>
          <p>Capital:</p>
          <h2>{country.capital}</h2>
        </div>

        <div className={style.area}>
          <p>Area:</p>
          <h2>{country.area} km2</h2>
        </div>

        <div className={style.population}>
          <p>Population:</p>
          <h2>{country.population} 🧍🏽🧍🏽‍♀️</h2>
        </div>


      </div>
      
      <div className={style.activitiesCointainer}>
        <h2>Activities</h2>

        <div className={style.buttonsContainer}>
          <button > All</button>
          <button>🍂 Fall</button>
          <button>🌻 Spring</button>
          <button>❄️ Winter</button>
          <button>🏖 Summer</button>
        </div>

          <div className={style.listActivities}>
            {
            
              country.Activities && country.Activities.length === 0 ?  <p className={style.messageActivities}>There is no activities for this country YET, if you want you could add one  
                <Link to="/create">
                <span> HERE</span>
                </Link>
                </p>
                : country.Activities && country.Activities.map(activity=>
                  <div key={activity.id} className={style.activitiesBox}>
                    <div className={style.tapeDecor}></div>
                    <h3 className={style.activityName}>{activity.name.toUpperCase()}</h3>
                    <p>Dificulty level: <span>{activity.level}</span></p>
                    <p>Duration: <span>{activity.duration}</span> hours</p>
                    <p>Season:
                      <span>
                        {activity.season === 'fall' && ' 🍂 Fall'}
                        {activity.season === 'spring' && ' 🌻 Spring'}
                        {activity.season === 'winter' && ' ❄️ Winter'}
                        {activity.season === 'summer' && ' 🏖 Summer'}
                    </span></p>

                  </div>
                )
              
                
            }
        </div>
      </div>
      </div>

      <Link to="/home">
        <button className={style.returnButton}>Return to Home</button>
      </Link>
  
    </> 
  )
}




export default Detail