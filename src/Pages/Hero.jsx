import React, { useEffect, useState, } from 'react'
import "./Hero.css"
import { useLocation } from 'react-router-dom';

const Hero = () => {
    const [value, setValue] = useState();
    const {pathname} = useLocation();
    console.log('this',pathname)
    useEffect(()=>{
        if(pathname){
            const value = pathname.slice(1).toUpperCase();
            setValue(value);
        }
    },[pathname]);
  return (
    <div className='HeroMain'> 
        <div className='HeroMainWrapper'>
            <p>Home/Product</p>
            <h1>{value}</h1>
            <p>Showing 1-12 of 36 results</p>
        </div>
    </div>
  )
}

export default Hero