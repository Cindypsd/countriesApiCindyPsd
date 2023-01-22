import React from 'react'
import { Link } from 'react-router-dom'

import style from './NavBar.module.css'

export const NavBar = () => {
  return (
    <div className={style.container}>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/create">
        <button>Create an Activity</button>
      </Link>
    </div>
  )
}
