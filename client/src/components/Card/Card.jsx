import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'



//Componente Presentacional
export const Card = (props) => {
  
  return (
    <div className={style.container}>
      <img src={props.flag} alt="Coutry Flag" />
      <Link to={`/detail/${props.id}`}>
      <p>Name:{props.name}</p>
      </Link>
      <p>Continet:{props.continet}</p>
    </div>
  )
}
