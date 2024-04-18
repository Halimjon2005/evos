import React from 'react'
import'./footer.css'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer__wrap">
            <div className="container">
                <div className="footer__f">
                    <div className="footer__logo">
                        <img src="https://api.logobank.uz/media/logos_png/EVOS-01.png" alt="" />
                    </div>
                    <div className="footer__link">
                    <Link to={'/'}> Asosiy</Link>
                  <Link to={'/filyal'}> Filyallar</Link>
                  <Link to={'/vakand'}> Vakandlar</Link>
                  <Link to={'/yangiliklar'}> Yangiliklar</Link>
                  <Link to={'/malumotlar'}> Biz haqimizda</Link>
                  <Link to={'/kontakt'}> Kontaktlar</Link>
                    </div>
                    <div className="footer__icons"> 
             <img src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Google_Play_Store_badge_FR.svg" alt="" className=' app'/>
             <img src="https://strategicfire.org/wp-content/uploads/2016/11/app-store-logo.png" alt="" className=' app' />
                    
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <div className="footer_pas">
            <div className="footer__ong">
                <h2>© Evos 2006 - 2024 All rights reserved</h2>
            </div>
            <div className="footer__chap">
          <p><FaInstagram/></p>
      <FaFacebook/>
<FaTelegram/>
            </div>
        </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
