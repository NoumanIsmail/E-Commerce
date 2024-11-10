import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav>
      <div><NavLink>e-commerce</NavLink></div>
      <div>
        <ul>
          <li><NavLink>Home</NavLink></li>
          <li><NavLink>Category</NavLink></li>
          <li><NavLink>Shop</NavLink></li>
          <li><NavLink>Cart</NavLink></li>
          <li><NavLink>Login</NavLink></li>
        </ul>
      </div>
    </nav>
    </>
  )
}

export default Header