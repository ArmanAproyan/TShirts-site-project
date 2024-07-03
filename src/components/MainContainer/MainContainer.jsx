import React, { useState } from 'react'
import './style.css'
import Header from '../Header/Header'
import CreateTshirtBlock from '../CreateTshirtBlock/CreateTshirtBlock'
import Slider from '../Slider/Slider'
import BasketModal from '../BasketModal/BasketModal'
import Footer from '../footer/Footer'

const MainContainer = () => {
  const [basketModalIsOpen, setBasketModalIsOpen] = useState(false);
  const [scroll, setScroll] = useState({
    scrollSlider: false,
    scrollMain: false
  });

  const handleScrollSlider = () => {
    setScroll((prevState) => {
      return {
        ...prevState,
        scrollSlider: true
      }
    })
    setTimeout(() => {
      setScroll((prevState) => {
        return {
          ...prevState,
          scrollSlider: false
        }
      })
    }, 0);
  }


  const handleScrollHeader = () => {
    setScroll((prevState) => {
      return {
        ...prevState,
        scrollMain: true
      }
    })
    setTimeout(() => {
      setScroll((prevState) => {
        return {
          ...prevState,
          scrollMain: false
        }
      })
    }, 0);
  }

  const handleOpenBasketModal = (e) => {
    setBasketModalIsOpen(true)
  }
  const handleCloseBasketModal = (e) => {
    if (e.target.className == 'basket_modal') {
      setBasketModalIsOpen(false)
    }
    if (e.target.className == 'global_buy_button') {
      setBasketModalIsOpen(false)
    }
  };



  return (
    <div onClick={(e) => handleCloseBasketModal(e)} className="main_container">
      {basketModalIsOpen ? <BasketModal /> : null}
      <Header scroll={handleScrollHeader} isOpen={handleOpenBasketModal} />
      <CreateTshirtBlock scrollToMain={scroll.scrollMain} handleScroll={handleScrollSlider} />
      <Slider scroll={scroll.scrollSlider} />
      <Footer />
    </div>

  )
}

export default MainContainer
