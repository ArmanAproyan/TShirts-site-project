import React from 'react'
import './style.css'
import tshirtsColection from '../../tshirtsColections/tshirtsColection'

const TshirtContainer = () => {
  return (
    <div className='tshits_container'>
        <div className="tshirts_block">
            {tshirtsColection.map((val) => {
                return (
                    <div className="sells_tshirts_block">
                        <div className="image_block">
                            <img src={val.img} alt="" />
                            <div className="button_block">
                                 <button>Buy {val.price} $</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default TshirtContainer
