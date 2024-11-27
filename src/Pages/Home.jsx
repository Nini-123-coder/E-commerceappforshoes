import React from 'react'
import "./Home.css"
import Hero from './Hero'
import Product from './Product'

const Home = () => {
  return (
    <div className='MainBody'>
        <div className='MainBodyWrapper'>
            <Hero/>
            <Product/>
        </div>
    </div>
  )
}

export default Home