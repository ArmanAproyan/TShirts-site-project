import React from 'react'
import './style.css'

//web sites 
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer_block">
        <div ><FaInstagram style={{ color: 'orangered' }} /> <span>Instagram</span> </div>
        <div><FaFacebook style={{ color: 'blue' }} /><span>Facebook</span></div>
        <div><FaWhatsapp style={{ color: 'green' }} /> <span>Whatsapp</span></div>
        <div><FaTwitter style={{ color: '#7accf0' }} /> <span>Twitter</span> </div>
      </div>
    </div>
  )
}

export default Footer
