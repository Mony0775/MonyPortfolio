import React from 'react'
import CV from '../../assets/CV/PHOEUN_Mony_RESUME (2).pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} className='btn'>Download CV</a>
        <a href="#contact" className="btn btn-primary">ContactLet's Talk</a>
    </div>
  )
}

export default CTA