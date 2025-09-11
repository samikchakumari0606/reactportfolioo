import React, { useRef } from 'react'
import "./Navbar.css"
import {useState} from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from "../../assets/menu_open.svg"
import menu_close from "../../assets/menu_close.svg"


const Navbar = () => {

  const[menu,setMenu]=useState("home");
  const menuRef=useRef()

  const openMenu=()=>{
    menuRef.current.style.right="0"
  }
   

  const closeMenu=()=>{
    menuRef.current.style.right="-350px"
  }


  return (
    <div className="navbar">

     <h1>logo</h1>
    <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />

     <ul ref={menuRef}  className="nav-menu">

       <img src={menu_close} onClick={closeMenu} alt="myclosebutton" className='nav-mob-close'  />
       
        <li><AnchorLink className="anchor-link"  href="#home"><p onClick={()=>setMenu("Home")}>Home</p></AnchorLink>
          {menu==='Home'?<hr/>:""}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about"><p onClick={()=>setMenu("About me")}>About me</p> </AnchorLink>
          {menu==='About me'?<hr/>:""}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#services"> <p onClick={()=>setMenu("Services")}>Services</p> </AnchorLink>
         {menu==='Services'?<hr/>:""}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#portfolio"> <p onClick={()=>setMenu("Portfolio")}>Portfolio</p> </AnchorLink>
         {menu==='Portfolio'?<hr/>:""}</li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact"><p onClick={()=>setMenu("Contact")}>Contact</p> </AnchorLink>
          {menu==='Contact'?<hr/>:""}</li>
     </ul>

     <div className="nav-connect"> <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink></div>
      
    </div>
  )
}

export default Navbar
