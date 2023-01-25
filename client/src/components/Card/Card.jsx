import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'



//Componente Presentacional
export const Card = (props) => {
  
  return (
    <div className={style.container}>
      <Link to={`/detail/${props.id}`}>
        <img src={props.flag} alt="Coutry Flag" />
      </Link>
        <h2>{props.name}</h2>
        <p><span>Continent:</span> {props.continet.toUpperCase()}</p>
    </div>
  )
}
