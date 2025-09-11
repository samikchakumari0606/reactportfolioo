import React from 'react'
import "./MyWork.css"
import myWorkData from './MyWorkData'

const MyWork = () => {
  return (
    <div id="work"  className='mywork'>
       <div className="mywork-title">
        <h1>My latest work</h1>
        <h1>theme image</h1>
       </div>

       <div className="mywork-container">
        {
            myWorkData.map((item,index)=>{
              return(
                 <div key={item.w_no}>
                    <img src={item.w_image} alt="" />
                    <h3>{item.w_name}</h3>
                    <h2>{item.w_link}</h2>
                </div>
              )
            })
        }
       </div>
    </div>
  )
}

export default MyWork
