import React from 'react';

import './css/Portfolio.css';

import amazonClone from './images/amazon-clone.png';
import netflixClone from './images/netflix-clone.png';
import spotifyClone from './images/spotify-clone.png';
import myPortfolio from './images/my-portfolio.png';
import monkNode from './images/monkNode.png';

const data = [
  {
    id: 1,
    image: amazonClone,
    title: 'Amazon Clone - A Full Stack Web App with Payment Processing.',
    github: 'https://github.com/Vishesh3011/amazon-clone',
    demo: 'https://clone-fac7c.web.app/',
  },
  {
    id: 2,
    image: netflixClone,
    title: 'Netflix Clone - A Web App built using The Movie Database(TMDB) API.',
    github: 'https://github.com/Vishesh3011/netflix-clone',
    demo: 'https://netflix-clone-d7048.web.app/',
  },
  {
    id: 3,
    image: spotifyClone,
    title: 'Spotify Clone - A Web App with Login system using Spotify API.',
    github: 'https://github.com/Vishesh3011/spotify-clone',
    demo: 'https://spotify-clone-5fc0c.web.app',
  },
  {
    id: 4,
    image: myPortfolio,
    title: 'My Portfolio - This Single Page Web Application using React JS',
    github: 'https://github.com/Vishesh3011/my-portfolio',
    demo: 'https://my-portfolio-811aa.web.app/',
  },
  {
    id: 5,
    image: monkNode,
    title: 'MonkNode - A MERN stack Web App aimed to boost productivity.',
    github: 'https://github.com/Vishesh3011/monknode',
    demo: 'https://monknode-todo.web.app/',
  },
  // {
  //   id: 6,
  //   image: travelAdvisor,
  //   title: 'Travel Advisor - A MERN Stack Web App using Travel Advisor API.',
  //   github: 'https://github.com/Vishesh3011/amazon-clone',
  //   demo: 'https://clone-fac7c.web.app/',
  // },
]

function Portfolio() {
  return (
    <section id = 'portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolioContainer'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <div key = {id} className='portfolioItem'>
                <div className='portfolioItemImage'>
                  <img src={image} alt = "amazon-clone"/>
                </div>
                <h3>{title}</h3>
                <div className='portfolioItemCTA'>
                  <a href = {github} className='btn' target='_blank'>Github</a>
                  <a href = {demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio