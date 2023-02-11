import React from 'react'
import './about.css'
import MyProfile from '../../assets/image/Mony.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
  return (
    <section id="about">
      <h5>Get to Me</h5>
      <h2>About</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MyProfile} alt="About Image" width="500px" height="500px"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ year experience</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Assignments</h5>
              <small>10+ Exercises</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>
          <p>Hello My name is PHOEUN Mony, Here is react project testing on portfolio, Recently I am a student at Institute of Technology of Cambodia year 5th semester II and I am a internship at amret institution microfinance as core banking support internship.</p>
          <a href="#contact" className="btn btn-primary">Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About