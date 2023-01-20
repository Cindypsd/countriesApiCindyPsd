import React from 'react'

export const PagingButtons = (props) => {
  return (
    <div>
      <button onClick={props.prevHandler}>Atras</button>
        <p>Pagina: {props.currentPage}/24</p>
      <button onClick={props.nexHandler}>Siguiente</button>
    </div>
  )
}
