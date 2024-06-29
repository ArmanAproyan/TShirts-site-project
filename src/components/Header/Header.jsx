import React, { useEffect, useState } from 'react'
import './style.css'
import Logo from '../../../assets/logo.png'
import { IoBasket } from "react-icons/io5";
import { useSelector } from 'react-redux';

const Header = ({isOpen}) => {
    const [basketCount, setBasketCount] = useState(0)
    const myBasket = useSelector((state) => state.myBasket);

    const handleChangeBasketCount = () => {
        const globalCont = myBasket.reduce((acc, val) => {
            return acc += val.count
        }, 0)
        setBasketCount(globalCont)
    };

    useEffect(() => {
        handleChangeBasketCount()
    }, [myBasket])

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
                <span onClick={isOpen} className='basket_icone'> <IoBasket /> </span>
                <span>{basketCount}</span>
            </div>
        </div>
    )
}

export default Header
