import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { AiOutlineWhatsApp } from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <div className='contact-container'>
        <div className='contact-options'>
          <article className='contact-option'>
          <MdOutlineEmail />
          <h4>Email</h4>
          <h5>davyzkorir@gmail.com</h5>
          <a href='mailto:davyzkorir@gmail.com' target='_blank'>Send a Message</a>
          </article>
          <article className='contact-option'>
          <RiMessengerLine />
          <h4>Messenger</h4>
          <h5>Miles Best</h5>
          <a href='https://m.me/' target='_blank'>Send a Message</a>
          </article>
          <article className='contact-option'>
          <AiOutlineWhatsApp />
          <h4>Whatsapp</h4>
          <h5>Humble Beast</h5>
          <a href='https://api.whatsapp.com/send?phone=+254705013074' target='_blank'>Send your message</a>
          </article>
        </div>
        <form action=''>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary '>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact