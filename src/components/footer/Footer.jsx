import React from 'react'
import './footer.css'
import {TbBrandTelegram} from 'react-icons/tb'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Mario</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/profile.php?id=100029562860851"><FaFacebookF/></a>
        <a href="https://t.me/Mony0775"><TbBrandTelegram/></a>
        <a href="https://www.instagram.com/phoeun_mony/"><FiInstagram/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Mario All rights reserve</small>
      </div>
    </footer>
  )
}

export default Footer