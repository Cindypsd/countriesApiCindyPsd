import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/create">
        <button>Create an Activity</button>
      </Link>

    </div>
  )
}
