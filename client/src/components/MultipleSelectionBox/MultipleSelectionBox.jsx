import React from 'react'
import style from './MultipleSelectionBox.module.css'

export const MultipleSelectionBox = (props) => {
  return (
    <div className={style.countryContainer}>
      <p>{props.country}</p>
      <h4 onClick={()=>props.onDeletee(props.country)}>X</h4>
    </div>
  )
}
