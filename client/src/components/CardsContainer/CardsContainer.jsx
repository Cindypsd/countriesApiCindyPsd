import { useSelector } from "react-redux"
import { Card } from "../Card/Card"
import style from "./CardsCointainer.module.css"

// const countries = [
//   {
// 		"name": "Poland",
// 		"flag": "https://flagcdn.com/w320/pl.png",
// 		"continet": "Europe"
// 	},
// 	{
// 		"name": "Canada",
// 		"flag": "https://flagcdn.com/w320/ca.png",
// 		"continet": "Americas"
// 	},
// 	{
// 		"name": "Cocos (Keeling) Islands",
// 		"flag": "https://flagcdn.com/w320/cc.png",
// 		"continet": "Oceania"
// 	},
// 	{
// 		"name": "Bermuda",
// 		"flag": "https://flagcdn.com/w320/bm.png",
// 		"continet": "Americas"
// 	},
// 	{
// 		"name": "Uganda",
// 		"flag": "https://flagcdn.com/w320/ug.png",
// 		"continet": "Africa"
// 	},
// 	{
// 		"name": "French Polynesia",
// 		"flag": "https://flagcdn.com/w320/pf.png",
// 		"continet": "Oceania"
// 	},
// 	{
// 		"name": "Bahamas",
// 		"flag": "https://flagcdn.com/w320/bs.png",
// 		"continet": "Americas"
// 	},
// 	{
// 		"name": "Cape Verde",
// 		"flag": "https://flagcdn.com/w320/cv.png",
// 		"continet": "Africa"
// 	},
// ]



export const CardsContainer = () => {
	const countries = useSelector(state=>state.countries)
  
  return (
    <div className={style.container}>
      {
        countries.map(country=>{
           return <Card
              key={country.id}
              id={country.id}
              name={country.name}
              flag={country.flag}
              continet ={country.continet}
           />
          })
      
      }
      </div>
  )
}


