
import { useSelector } from "react-redux"

import { Card } from "../Card/Card"

//import { PagingButtons } from "../PagingButtons/PagingButtons"
import style from "./CardsCointainer.module.css"


export const CardsContainer = () => {
	const countries =  useSelector(state=>state.countries) 
	const country =  useSelector(state=>state.country)


  return (
    <div>

    {/* <PagingButtons nexHandler={props.nexHandler} currentPage={props.currentPage} prevHandler={props.prevHandler} dataPerPage={props.dataPerPage}/>  */}
      

      <div className={style.container}>
        {
          !country.length ? countries.map(country=>{
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


