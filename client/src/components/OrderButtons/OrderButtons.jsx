import React from 'react'
import style from './OrderButtons.module.css'

export const OrderButtons = (props) => {
  return (
    <div className={style.container}>

      <form>
      <label htmlFor='filterBy'>Filter by Contintet </label>
        <select id="filterBy">
          <option value="All" >All Continents</option>
          <option value="Americas">Americas</option>
          <option value="Africa">Africa</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>


        <label htmlFor='orderInput'>Order by </label>
        <select id="orderInput">
          <option value="population">Population</option>
          <option value=" alphabetically">Alphabetically</option>
        </select>


          <input type="radio" id='ASC' name='order' value='ASC' defaultChecked/>
          <label htmlFor='ASC'>⬆️</label>

          <input type="radio" id='DES' name='order' value='DES'/>
          <label htmlFor='DES'>⬇️</label>
         
      </form>

    </div>
  )
}
