import { useSelector } from "react-redux"

import { Card } from "../Card/Card"
import { Pagination } from "../Pagination/Pagination"

import style from "./CardsCointainer.module.css"


export const CardsContainer = () => {
	const countriesDB =  useSelector(state=>state.countries) 
	const country =  useSelector(state=>state.country)







  return (
    <div>

      

      <div className={style.container}>

        {  

          !country.length ? countriesDB.map(country=>{
            return <Card
                key={country.id}
                id={country.id}
                name={country.name}
                flag={country.flag}
                continet ={country.continet}
            />
            }) : 

            country && country.map(country=>{
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
    </div>
  )
}


