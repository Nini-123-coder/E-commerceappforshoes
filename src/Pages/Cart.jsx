import React from 'react'
import "./Cart.css"
import Hero from './Hero'

const Cart = () => {
  const items = [1,2,3,4,5,6,7]
  return (
    <div className='MainBody'>
        <div className='MainBodyWrapper'>
            <Hero/>
            <div className='Cart'>
     {
      items.map(()=>(
        <div className="CartBox">
        <img src="" alt="" className='CartImg' />
        <div className="CartDetails">
          <h5>Product Name</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, laboriosam.</p>
          <div className="Controls">
            <div className='DetailsControl'>
              <button style={{backgroundColor:'gold'}}>+</button>
              <h4>1</h4>
              <button style={{backgroundColor:'gold'}}>-</button>
            </div>
            <button style={{backgroundColor:'orange', width:'30%'}}>Delete</button>
          </div>
          
        </div>
      </div>
      ))
     }
    </div>
        </div>
    </div>
  )
}

export default Cart