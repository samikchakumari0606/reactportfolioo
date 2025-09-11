import React from 'react'
import "./About.css"


const About = () => {
  return (
    <div id="about" className='about'>

      <div className="about-title">
        <h1>About me</h1>
        {/* <h1>my Image</h1> */}
      </div> 

      <div className="about-sections">

        <div className="about-left">
            <h1>my Image</h1>
        </div>

        <div className="about-right">
            <div className="about-para">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum placeat error id! Aut, suscipit velit!</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit tempore in praesentium enim laboriosam ducimus!</p>
            </div>
            <div className="about-skills">
             <div className="about-skill"><p>HTML & CSS </p><hr style={{width:"50%"}} /> </div>
              <div className="about-skill"><p>TELWIND & BOOTSTRAP</p><hr style={{width:"70%"}} /> </div>
               <div className="about-skill"><p>JAVASCRIPT </p><hr style={{width:"60%"}} /> </div>
            <div className="about-skill"><p>REACT JS </p><hr style={{width:"50%"}} /> </div>
            </div>
        </div>

      </div>

      <div className="about-achievements">

        <div className="about-achievement">
            <h1>2+</h1> 
            <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>20+</h1> 
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1> 
            <p>STUDENT TEACHED</p>
        </div>
      </div>

    </div>
  )
}

export default About
