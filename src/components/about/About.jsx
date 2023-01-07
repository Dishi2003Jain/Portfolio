import React from 'react'
import './about.css'
import ME from '../../assets/img2.jpg'
const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
         <div className="about__me">
          <div className="about__me-image">
               <img src={ME} alt="About image"  />
          </div>
          <div className="about__me-para">
          <h1>Hii!!</h1>
          <p>My name is Dishi Jain.I am currently pursuing B.tech in information technology from IIIT Bhopal.I have been selected as as a Mentee for Microsoft Engage 2022 program.I am the member of Web development team of codame club,IIIT Bhopal and also collaborated with students of various IIITs on the topics of mutual interest at IIITians Network-Student Tech Community.I work efficiently both as an individual contributor as well as along with the team.I seek new challenges and try to think out-of-the-box while looking for creative solutions to a given problem.I am go-getter and intend to put in my effort towards channelizing my knowledge and skills.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About