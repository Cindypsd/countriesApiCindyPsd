import React from 'react'

export const OrderButtons = (props) => {
  return (
    <div>
      <div>
        Order by: 
        <select>
          <option value="population">Population</option>
          <option value=" alphabetically">Alphabetically</option>
        </select>
          <button>⬆️</button>
          <button>⬇️</button>
      </div>

    </div>
  )
}
