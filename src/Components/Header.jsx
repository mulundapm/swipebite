import React from 'react'
import logo from '../Assets/swipebite-high-resolution-logo-transparent.png'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='container'>
        <Link to="/" ><img src={logo} alt="logo" className="center logo" width={200}/></Link>
    </div>
  )
}

export default Header