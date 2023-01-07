import React from 'react'
import './projects.css'
import IMG3 from '../../assets/imgrock.png'
import IMG5 from '../../assets/imgweather.png'
import IMG6 from '../../assets/imgbmi.png'
import IMG1 from '../../assets/newsapp.png'
import IMG2 from '../../assets/textapp.png'
import IMG4 from '../../assets/snake.png'

const data=[
  {
    id:1,
    image:IMG1,
    title:'News App',
    github:'https://github.com'
  },
  {
    id:2,
    image:IMG2,
    title:'Text App',
    github:'https://github.com/Dishi2003Jain/Text-App'
  },
  {
    id:3,
    image:IMG3,
    title:'Rock paper scissor',
    github:'https://github.com/Dishi2003Jain/Rock-paper-scissor'
  },
  {
    id:4,
    image:IMG4,
    title:'Snake game',
    github:'https://github.com/Dishi2003Jain/Snake-game'
  },
  {
    id:5,
    image:IMG5,
    title:'Weather App',
    github:'https://github.com/Dishi2003Jain/Weather-App'
  },
  {
    id:6,
    image:IMG6,
    title:'BMI calculator',
    github:'https://github.com/Dishi2003Jain/BMI-cal'
  },
]


const Projects = () => {
  return (
    <section id='projects'>
      <h5>My recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        
        {
          data.map(({id,image,title,github})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
              <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn btn-primary' target={'_blank'}>Github</a>
              </div>      
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Projects