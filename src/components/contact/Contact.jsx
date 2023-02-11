import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiTelegramLine} from 'react-icons/ri'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zgoebki', 'template_k7eepwq', form.current, 'aM2Of5bnTcHK7qdGA')
    e.target.reset()
  };

  return (
    <section id="contact">
       <h5>Get in touch</h5>
       <h2>Contact</h2>
       <div className="container contact__container">
        <div className="contact__options">
            <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>phoeunmony12@gmail.com</h5>
            <a href="mailto:phoeunmony12@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>ភឿន​ មុនី</h5>
            <a href="https://m.me/100029562860851" target="_blank">Chat with me</a>
          </article>
          <article className="contact__option">
            <RiTelegramLine className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Mony0775</h5>
            <a href="https://t.me/Mony0775" target="_blank">Contact me</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required/>
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button className="btn btn-primary" type="submit">Send Message</button>
          </form>
       </div>
       
    </section>
  )
}

export default Contact