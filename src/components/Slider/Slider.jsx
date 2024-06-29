import React, { useEffect, useState } from 'react'
import './style.css'
import tshirtsColection from '../../tshirtsColections/tshirtsColection'

const Slider = () => {

  const [sliderCordinats, setSliderCordinats] = useState({
    initialCordinat: 0,
    changeCordinat: 0,
    marginCount: 0,
    margin: 0
  });


  const handleStartDrag = (e) => {
    setSliderCordinats((prevState) => {
      return {
        ...prevState,
        initialCordinat: e.clientX
      }
    })
  }

  const handleDragOver = (e) => {

    setSliderCordinats((prevState) => {
      return {
        ...prevState,
        changeCordinat: e.clientX
      }
    })

    if (sliderCordinats.changeCordinat < sliderCordinats.initialCordinat) {
      if (sliderCordinats.margin <= -1300) {
        return
      }

      setSliderCordinats((prevState) => {
        return {
          ...prevState,
          marginCount: -20,
          margin: prevState.margin + prevState.marginCount

        }
      })

      return

    } else {
      if (sliderCordinats.margin >= 0) {
        return
      }

      setSliderCordinats((prevState) => {
        return {
          ...prevState,
          marginCount: 20,
          margin: prevState.margin + prevState.marginCount
        }
      })
    }

    return

  }


  return (
    <div className="slider_block">
        <div draggable={true} onDragStart={handleStartDrag} onDragOver={handleDragOver} className="slider_change_cordinate"></div>
      <div  style={{ marginLeft: sliderCordinats.margin + 'px' }} className="slider">
        {tshirtsColection.map((val) => {
          return (
            <div key={val.id} className="tshirts">
              <div className="image_block">
                <img src={val.img} alt="" />
              </div>
              <div className="buy_button_block">
                <button className='buy_button'>Buy {val.price} $</button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Slider
