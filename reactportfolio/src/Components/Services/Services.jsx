import React from 'react'
import "./Services.css"
import Servicedata from './ServiceData'



const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <h1>my Image</h1>
        </div>
      <div className="services-container">
       {
        Servicedata.map((service,index)=>{
            return(
                 <div key={index} className='services-format'>
                  <h3>{service.s_no}</h3>
                  <h2>{service.s_name}</h2>
                  <p>{service.s_desc}</p>
                   <div className="services-readmore">
                    <p>Read More</p>
                    <p>arrow icon</p>
                   </div>

                </div>
            )
        })
       }
      </div>

    </div>
  )
}

export default Services
