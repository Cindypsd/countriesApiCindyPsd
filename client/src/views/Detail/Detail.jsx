import { Link } from 'react-router-dom'



const country = {
	"id": "POL",
	"name": "Poland",
	"flag": "https://flagcdn.com/w320/pl.png",
	"continet": "Europe",
	"capital": "Warsaw",
	"subregion": "Central Europe",
	"area": 312679,
	"population": 37950802,
	"Activities": [
		{
			"id": 1,
			"name": "Nadar",
			"level": "5",
			"duration": 1,
			"season": "summer"
		},
		{
			"id": 2,
			"name": "Nadar",
			"level": "5",
			"duration": 1,
			"season": "summer"
		}
	]
}

export const Detail = () => {
  return (
    <div>
      <h1>Esto es Detail</h1>

      <h2>{country.name}</h2>
      <img src={country.flag} alt={`${country.name} flag`} />
      <p>Continent: {country.continet}</p>
      <p>Subregin: {country.subregion}</p>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area} km2</p>
      <p>Population: {country.population} km2</p>

      <h2>Activities</h2>
        {
          country.Activities.map(a=>
              a.name
            )
        }

      <Link to="/home">
        <button>Return to Home</button>
      </Link>
    </div>
  )
}
