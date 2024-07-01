import React, { useState } from 'react'
import './style.css'
import bigLogo from '../../../assets/bigLogo.png'

const CreateTshirtBlock = ({handleScroll}) => {


  return (
    <main>
        <div className="create_block">
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
