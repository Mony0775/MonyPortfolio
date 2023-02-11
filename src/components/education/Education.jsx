import React from 'react'
import './education.css'
import EDU1 from '../../assets/image/trancript.jpg'
import EDU2 from '../../assets/image//bacII.jpg'

const data = [
  {
    id: 1,
    image: EDU1,
    name: 'Transcript year 4th',
    description: 'This is my year 4th transcript of Institute of Technology of Cambodia'
  },
  {
    id: 2,
    image: EDU2,
    name: 'BaccII Year 2018',
    description: 'This is my bacII certification received on 2018'
  }
]

const Education = () => {
  return (
    <section id="education">
      <h5>what I learn</h5>
      <h2>Education</h2>
      <div className="container education__container">
        {
          data.map(({id,image,name,description}) => {
            return (
              <article key={id} className="education__item">
                  <div className="education__image">
                  <img src={image} alt="" />
                  <h5 className="education__name">{name}</h5>
                  <small className="text-light">{description}</small>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Education