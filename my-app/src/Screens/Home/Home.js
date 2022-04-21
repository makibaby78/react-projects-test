import React from 'react'
import Card from './Components/Card/Card'
import Carousel from './Components/Carousel/Carousel'
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