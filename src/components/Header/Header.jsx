import React, { useEffect, useState } from 'react'
import './style.css'
import Logo from '../../../assets/logo.png'
import { IoBasket } from "react-icons/io5";
import { useSelector } from 'react-redux';

//tostify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = ({ isOpen }) => {
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
            <ToastContainer />
            <div className="logo_block">
                <span><img className='logo' src={Logo} alt="" /></span>
            </div>
            <nav className="name_block">
                <span>Trendy Threads</span>
            </nav>

            <div className="basket_block">
                <span onClick={isOpen} className='basket_icone'> <IoBasket /> </span>
                <span>{basketCount}</span>
            </div>
        </div>
    )
}

export default Header
