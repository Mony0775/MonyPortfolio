import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'

const Service = () => {
  return (
    <section id="service">
        <h5>What I offer</h5>
        <h2>Services</h2>
        <div className="container services__container">
            <article className="service">
                <div className="service__head">
                    <h3>UI/UX Design</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Design Mockup/prototype</p>
                </ul>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Design website page</p>
                </ul>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Design Admin dashboard</p>
                </ul>
            </article>

            <article className="service">
                <div className="service__head">
                    <h3>Web Developer</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Create Laravel Project</p>
                </ul>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Create Laravel backend API</p>
                </ul>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Create Nuxtjs project</p>
                </ul>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Create react portfolio.</p>
                </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>Content creator</h3>
                </div>

                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Create video game</p>
                </ul>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Create Short video of MLBB.</p>
                </ul>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Guided about MLBB Heros, Skills, Skins.</p>
                </ul>
                <ul className="service__list">
                    <li>
                        <BiCheck className='service__list_icon'/>
                    </li>
                    <p>Demo about technique of coding</p>
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Service