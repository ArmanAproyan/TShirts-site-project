import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import tshirtsColection from '../../tshirtsColections/tshirtsColection'
import { useDispatch, useSelector } from 'react-redux'
import { addToBasket, isIncludes } from '../../features/MyBasketSlice/myBasketSlice'

const Slider = ({ scroll }) => {

  const [sliderCordinats, setSliderCordinats] = useState({
    initialCordinat: 0,
    changeCordinat: 0,
    marginCount: 0,
    margin: 0
  });

  const myBasket = useSelector((state) => state.myBasket);
  const dispatch = useDispatch();
  const scrollRef = useRef()


  useEffect(() => {

    scroll ? scrollRef.current.scrollIntoView({ behavior: 'smooth' }) : null

  }, [scroll])


  const handleAddToBasket = (tshirt) => {
    const index = myBasket.findIndex((val) => val.id == tshirt.id)
    if (index !== -1) {
      dispatch(isIncludes(tshirt))
    } else {
      dispatch(addToBasket(tshirt))
    }
  }


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
    <div ref={scrollRef} className="slider_block">
      <div draggable={true} onDragStart={handleStartDrag} onDragOver={handleDragOver} className="slider_change_cordinate"></div>
      <div style={{ marginLeft: sliderCordinats.margin + 'px' }} className="slider">
        {tshirtsColection.map((val) => {
          return (
            <div key={val.id} className="tshirts">
              <div className="image_block">
                <img src={val.img} alt="" />
              </div>
              <div className="buy_button_block">
                <button onClick={() => handleAddToBasket(val)} className='buy_button'>Buy ${val.price} </button>
              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Slider
