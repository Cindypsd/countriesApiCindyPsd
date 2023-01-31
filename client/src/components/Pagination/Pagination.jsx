import React from 'react'
import style from './Pagination.module.css'

export const Pagination = ({countriesPerPage, totalCountries , paginate}) => {

  const pageNumbers =[];

  for (let i = 1; i < Math.ceil(totalCountries/countriesPerPage); i++) {
    pageNumbers.push(i) 
  }


  return (
    <nav className={style.cointainerPagination}>
     
        {
          pageNumbers.map(number=>(
            <button key={number}>
              <a onClick={()=>paginate(number)}href='!#'>{number}</a>
            </button >
          ))
        }
      
    </nav>
  )
}
