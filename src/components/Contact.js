import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

import './css/Contact.css';

import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7t775kf', 'template_3gdweb8', form.current, 'Mzdkc6PZT6C_LclGK')

    e.target.reset();
  };

  return (
    <section id = 'contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contactContainer'>
        <div className='contactOptions'>
          <div className='contactOption'>
            <EmailIcon className='contactOptionIcon'/>
            <h4>Email</h4>
            <h5>modivishesh30@gmail.com</h5>
            <a href = "mailto:modivishesh30@gmail.com" target='_blank'>Send a message</a>
          </div>
          <div className='contactOption'>
            <InstagramIcon className='contactOptionIcon'/>
            <h4>Instagram</h4>
            <h5>vishesh_3011</h5>
            <a href = "https://api.instagram.com/vishesh_3011" target='_blank'>Send a message</a>
          </div>
          <div className='contactOption'>
            <WhatsAppIcon className='contactOptionIcon'/>
            <h4>WhatsApp</h4>
            <h5>+91 79772 12360</h5>
            <a href = "https://api.whatsapp.com/send?phone=+917977212360" target='_blank'>Send a message</a>
          </div>
        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input type='text' name='name' placeholder = 'Your full name...' required/>
          <input type = 'email' name='email' placeholder= 'Your email...' required/>
          <textarea name = 'message' row = '7' placeholder='Your message...' required></textarea>
          <button type = 'submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact