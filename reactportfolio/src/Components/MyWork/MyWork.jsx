import React from 'react'
import "./MyWork.css"
import myWorkData from './MyWorkData'

const MyWork = () => {
  return (
    <div id="projects"  className='mywork'>
       <div className="mywork-title">
        <h1>My latest work</h1>
       </div>

       <div className="mywork-container">
        {
            myWorkData.map((item)=>{
              return(
                 <div key={item.w_no} className='mywork-format'>
                    <h2>{item.w_name}</h2>
                      <a className='project-link' href={item.w_link}>Project Source</a>
                </div>
              )
            })
        }
       </div>
    </div>
  )
}

export default MyWork
