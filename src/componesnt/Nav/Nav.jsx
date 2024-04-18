import React from 'react'
import'./Nav.css'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";
import { IoMdPerson } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { Image } from 'antd';
import {useCart} from "react-use-cart"

const Nav = () => {
  const {items}= useCart()
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  const Login=(e)=>{
    e.preventDefault()
    localStorage.setItem("rasm", e.target[0].value)
    localStorage.setItem("ism", e.target[1].value)
    localStorage.setItem("parol", e.target[2].value)
    window.location.reload()

  }

  const Chiqish =() =>{
    localStorage.removeItem('rasm')
    localStorage.removeItem('ism')
    localStorage.removeItem('parol')
window.location.reload()
  }
  return (
    <>
      <nav>
        <div className="container">
            <div className="navbar">
                <div className="nav__logo">
                    <img width={"100px"} src="https://api.logobank.uz/media/logos_png/EVOS-01.png" alt="" />
                </div>
                <div className="nav__link">
                  <Link to={'/'}> Asosiy</Link>
                  <Link to={'/filyal'}> Filyallar</Link>
                  <Link to={'/vakand'}> Vakandlar</Link>
                  <Link to={'/yangiliklar'}> Yangiliklar</Link>
                  <Link to={'/malumotlar'}> Biz haqimizda</Link>
                  <Link to={'/kontakt'}> Kontaktlar</Link>
                </div>
                <div className="nav__icons">
                    <button className='nav__btn1' > <FaLocationDot/> Location</button>
                    <Link to={'/karzina'}>
                    <button className='nav__btn2'  > <IoBag/> Savat <sub>{items.length}</sub></button>

                    </Link>
                    <button className='nav__btn3' > <LiaFlagUsaSolid/> <IoIosArrowDown/> </button>
                    <button className='nav__btn4' onClick={toggleDrawer}><IoMdPerson/> </button>
                    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                size={"30%"}
            >
              <div>
                {!localStorage.getItem('parol')?(
                    <form onSubmit={Login} >
                    <input type="text" placeholder='rasm..'  required/>
                    <input type="text"placeholder='ism.. ' required /> 
                    <input type="password" placeholder='parol..' required />
                    <button className='nav__btn5' type='submit'>Kirish</button>
                  </form>
                ) : (
                  <div className='profile'> 
     
                     <Image
             src={localStorage.getItem('rasm')} width={200}

  />
                     <h1>Ism: {localStorage.getItem('ism')}</h1>
                     <h3>Parol: {localStorage.getItem('parol')}</h3>
                        <button  className='nav__btn5' onClick={Chiqish}>Chiqish</button>
                     </div>
                )}
              </div>
            </Drawer>
                </div>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
