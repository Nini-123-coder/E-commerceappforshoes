import React from 'react'
import "./Details.css"
import Hero from './Hero'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";



const Details = () => {
  return (
    <div className='MainBody'>
        <div className='MainBodyWrapper'>
            <Hero/>
            <div className='details'>
                <div className='details1'>
                    <div className='details2'>
                        <div className='side1'>
                            <div className='section'>
                                <h5>Nike Air Max 270 to Chuck Taylors</h5>
                                <p>Nike's Air Force 1s were among the most 
                                    popular sneakers this year</p>
                            </div>
                            <div className='section1'>
                                <div className='box1'></div>
                                <div className='box2'></div>
                                <div className='box3'></div>
                            </div>
                        </div>
                        <div className='side2'>
                            <div className='circle'>

                            </div>
                        </div>
                        <div className='side3'>
                            <div className='about'>
                                <h3>Review:<FaStar  /><FaStar  /><FaStar  /><FaStar  /><FaStarHalfStroke /> 4.6</h3>
                            </div>
                            <div className='color'>
                                <h3>Color:<FaCircle style={{color: "blue"}} /><FaCircle style={{color: "orangered"}} /><FaCircle style={{color: "orange"}} /><FaCircle style={{color: "brown"}} />
                                </h3>
                            </div>
                            <div className='buttons'>
                            <button>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details