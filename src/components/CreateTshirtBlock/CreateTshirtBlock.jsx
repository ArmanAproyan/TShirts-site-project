import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import bigLogo from '../../../assets/bigLogo.png'

const CreateTshirtBlock = ({handleScroll,scrollToMain}) => {

    const scrollMain = useRef(null)

    useEffect(() => {
        scrollToMain ? scrollMain.current.scrollIntoView({ behavior: 'smooth' }) : null
    },[scrollToMain])

  return (
    <main>
        <div ref={scrollMain} className="create_block">
           <div className="create_text_block">
                <span>Buy the best clothes at the best prices</span>
                <button onClick={handleScroll} className='create_button'>Buy</button>
           </div>
        </div>
        <div className="big_logo">
            <img className='big_logo_img' src={bigLogo} alt="" />
        </div>
    </main>
)
}

export default CreateTshirtBlock
