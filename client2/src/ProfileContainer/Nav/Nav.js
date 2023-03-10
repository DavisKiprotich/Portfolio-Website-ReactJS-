import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai' 
import {FaUserTie} from 'react-icons/fa' 
import {RiServiceLine} from 'react-icons/ri' 
import {AiFillBook} from 'react-icons/ai'
import {MdOutlineMessage} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}><FaUserTie/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}><AiFillBook/></a>
        <a href="#services" onClick={() => setActiveNav('#services')} className = {activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav