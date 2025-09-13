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
         
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>To work in a progressive organization, where my professional skills are used and where I will put
              best of mine to the organisation and want to work at challenging position.</p>
            
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS </p><hr style={{ width: "80%" }} /> </div>
            <div className="about-skill"><p>TELWIND & BOOTSTRAP</p><hr style={{ width: "60%" }} /> </div>
            <div className="about-skill"><p>JAVASCRIPT </p><hr style={{ width: "70%" }} /> </div>
            <div className="about-skill"><p>REACT JS </p><hr style={{ width: "70%" }} /> </div>
          </div>
        </div>

      </div>

      <div className="about-achievements">

        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEAR OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>100+</h1>
          <p>STUDENT TEACHED</p>
        </div>
      </div>

    </div>
  )
}

export default About
