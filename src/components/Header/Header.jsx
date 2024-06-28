import React from 'react'
import './style.css'
import Logo from '../../../assets/logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo_block">
            <span><img className='logo' src={Logo} alt="" /></span>
        </div>
        <nav class="navbar">
            <ul class="nav-list">
                <li class="nav-item"><a href="#">Home</a></li>
                <li class="nav-item"><a href="#">About</a></li>
                <li class="nav-item"><a href="#">Services</a></li>
                <li class="nav-item"><a href="#">Contact</a></li>
            </ul>
        </nav>

        <div className="sign_in_block">
            <div className="sign-in-button">Sign In</div>
        </div>
    </div>
  )
}

export default Header
