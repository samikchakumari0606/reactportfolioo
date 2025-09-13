import React from 'react'
import "./Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Email (envelope) icon comes from free-solid-svg-icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// LinkedIn icon comes from free-brands-svg-icons
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'





const Contact = () => {

     const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7ddc577a-273d-4182-aba2-75c6e61aa45a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

    return (
        <div id="contact" className='contact'>



   
            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>

            <div className="contact-section">

                <div className="contact-left">
                    <h1>Let's talk </h1>
                    <p>I'm currently availiable to take on any new projects, so please do contact me </p>

                    <div className="contact-details">

                        <div className="contact-detail">
                          <FontAwesomeIcon icon={faEnvelope} size="1x" style={{ marginRight: '10px' }} />

                          <a href="#" className="icon">samikchaprasad0606@gmail.com</a>
                          <p></p>
                        </div>

                         <div className="contact-detail">
                            <FontAwesomeIcon icon={faLinkedin} size="1x" />
                             <a className="icon" href="www.linkedin.com/in/samiksha-kumari-31b578216">LinkedIn</a>
                        </div>

                    </div>
                   
                       

                   

                 </div>

                <form onSubmit={onSubmit}  className='contact-right'>
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name="name" />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your name' name="email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="10" placeholder='Enter your message'></textarea>
                    <button type="submit" className='contact-submit'>Submit now</button>
                </form>

            </div>




        </div>
    )
}

export default Contact
