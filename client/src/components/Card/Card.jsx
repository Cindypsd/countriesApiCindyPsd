import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'
export const Card = (props) => {
  return (
    <div className={style.container}>
      <img className='flagImg' src={props.flag} alt="Coutry Flag" />
      <Link to="/detail">
      <p>Name:{props.name}</p>
      </Link>
      <p>Continet:{props.continet}</p>
    </div>
  )
}
