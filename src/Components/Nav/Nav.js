import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const Nav = () => {
  return (
    <nav >
      <Link to="/" >
        <p>Home</p>
      </Link>
    </nav>
  )
}

export default Nav
