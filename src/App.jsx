import React from 'react'
import Nav from './components/nav/Nav'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import Experience from './components/experiences/Experience'
import Service from './components/service/Service'
import Education from './components/education/Education'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
const App = () => {
  return (
    <div>
      <Header/><Nav/>
      <div className="section">
        <About/>
      </div>
      <div className="section">
        <Experience/>
      </div>
      <div className="section">
        <Service/>
      </div>
      <div className="section">
        <Portfolio/>
      </div>
      <div className="section">
        <Education/>
      </div>    
      <div className="section">
        <Contact/>
      </div>  
      <Footer/>
    </div>
  )
}

export default App