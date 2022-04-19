import React from 'react'
import Card from './Card/Card'
import Carousel from './Carousel/Carousel'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <Carousel />
        <Card />
    </div>
  )
}

export default Home