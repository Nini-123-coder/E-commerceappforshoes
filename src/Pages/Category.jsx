import React from 'react'
import "./Category.css"
import Hero from './Hero'
import Product from './Product'

const Category = () => {
  return (
    <div className='MainBody'>
        <div className='MainBodyWrapper'>
            <Hero/>
            <Product/>
        </div>
    </div>
  )
}

export default Category