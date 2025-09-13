import React from 'react'
import "./Hero.css";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div className='hero'>
         {/* <h1>myImage</h1> */}

         <h1> <span>Hii I am Samiksha,</span> frontend developer based in INDIA.</h1>
         <p> Trained 100+ interns, previously Technical Trainer at Shanti InfoSoft, specializing in mentoring, skill development, and practical technology training </p>
    
         <div className="hero-action">
            <div className="hero-connect">
               <AnchorLink className="anchor-link" offset={50} href="#contact">Connect With Me</AnchorLink>
              </div>
            <div className="hero-resume">My resume
              <a href=""></a>
            </div>
         </div>
    </div>
  )
}

export default Hero
