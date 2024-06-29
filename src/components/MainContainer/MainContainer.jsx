import React from 'react'
import './style.css'
import Header from '../Header/Header'
import CreateTshirtBlock from '../CreateTshirtBlock/CreateTshirtBlock'
import Slider from '../Slider/Slider'

const MainContainer = () => {
  return (
    <div className="main_container">
        <Header/>
        <CreateTshirtBlock/>
        <Slider/>
    </div>
  )
}

export default MainContainer
