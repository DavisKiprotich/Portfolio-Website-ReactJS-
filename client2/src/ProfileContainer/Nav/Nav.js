import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai' 
import {FaUserTie} from 'react-icons/fa' 
import {RiServiceLine} from 'react-icons/ri' 
import {AiFillBook} from 'react-icons/ai'
import {MdOutlineMessage} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  return (
    <nav>
        <a href="#home"><AiOutlineHome/></a>
        <a href="#about"><FaUserTie/></a>
        <a href="#experience"><AiFillBook/></a>
        <a href="#services"><RiServiceLine/></a>
        <a href="#contact"><MdOutlineMessage/></a>
    </nav>
  )
}

export default Nav