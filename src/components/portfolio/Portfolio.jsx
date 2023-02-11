import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/image/Portfolio01.png'
import IMG2 from '../../assets/image/Portfolio02.png'
import IMG3 from '../../assets/image/portfolio03.png'
import IMG4 from '../../assets/image/portfolio04.png'



const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Portfolio 1',
        github: 'https://github.com',
        demo: 'https://github.com'

    },
    {
        id: 2,
        image: IMG2,
        title: 'Portfolio 2',
        github: 'https://github.com',
        demo: 'https://github.com'

    },
    {
        id: 3,
        image: IMG3,
        title: 'Portfolio 3',
        github: 'https://github.com',
        demo: 'https://github.com'

    },
    {
        id: 4,
        image: IMG4,
        title: 'Portfolio 4',
        github: 'https://github.com',
        demo: 'https://github.com'

    }
]
const Portfolio = () => {
  return (
    <section id="Portfolio">
        <h5>My recent work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
        {
                data.map(({id,image,title,github,demo}) => {
                    return (
                        <article key={id} className="portfolio__item">
                            <div className="portfolio_item-image">
                                <img src={image} alt="Portfolio01" />
                            </div>
                            <h3>{title}</h3>
                            <div className="portfolio__item-cta">
                                <a href={github} className="btn" target='_blank'>Github</a>
                                <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                            </div>
                            
                        </article>
                    )
                })
            }

        </div>
    </section>
  )
}

export default Portfolio