import React, { useState } from 'react'
import './style.css'
import Header from '../Header/Header'
import CreateTshirtBlock from '../CreateTshirtBlock/CreateTshirtBlock'
import Slider from '../Slider/Slider'
import BasketModal from '../BasketModal/BasketModal'

const MainContainer = () => {
  const [basketModalIsOpen, setBasketModalIsOpen] = useState(false);

  const handleOpenBasketModal = (e) => {
    setBasketModalIsOpen(true)
  }
  const handleCloseBasketModal = (e) => {
    if (e.target.className == 'basket_modal') {
      setBasketModalIsOpen(false)
    }
    if(e.target.className == 'global_buy_button') {
      setBasketModalIsOpen(false)
    }
  };


  return (
    <div onClick={(e) => handleCloseBasketModal(e)} className="main_container">
      {basketModalIsOpen ? <BasketModal /> : null}
      <Header isOpen={handleOpenBasketModal} />
      <CreateTshirtBlock />
      <Slider />
    </div>
  )
}

export default MainContainer
