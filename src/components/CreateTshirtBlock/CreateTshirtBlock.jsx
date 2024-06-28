import React from 'react'
import './style.css'
import bigLogo from '../../../assets/bigLogo.png'

const CreateTshirtBlock = () => {
  return (
    <main>
        <div className="create_block">
           <div className="create_text_block">
                <span>create a T-shirt to your taste</span>
                <button className='create_button'>Create</button>
           </div>
        </div>
        <div className="big_logo">
            <img className='big_logo_img' src={bigLogo} alt="" />
        </div>
    </main>
)
}

export default CreateTshirtBlock
