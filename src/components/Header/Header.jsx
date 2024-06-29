import React from 'react'
import './style.css'
import Logo from '../../../assets/logo.png'
import { IoBasket } from "react-icons/io5";

const Header = () => {

  return (
    <div className='header'>
        <div className="logo_block">
            <span><img className='logo' src={Logo} alt="" /></span>
        </div>
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><a href="#">Home</a></li>
                <li className="nav-item"><a href="#">About</a></li>
                <li className="nav-item"><a href="#">Services</a></li>
                <li className="nav-item"><a href="#">Contact</a></li>
            </ul>
        </nav>

        <div className="basket_block">
            <span className='basket_icone'> <IoBasket/> </span>
        </div>
    </div>
  )
}

export default Header
