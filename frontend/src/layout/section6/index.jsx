import React from 'react'
import "./section6.scss"
import Slider from '../../components/slider/slider'

function Section6() {
  return (
    <>
    <section className='section6'><div className="container">
    <h3>Best Sellers</h3>
           <div className='line1'>
           <div className="line"></div>
           </div>
           <div style={{marginTop:"30px"}}>
            <Slider/>
           </div>
           
    </div>
  
   
    </section>

    </>
  )
}

export default Section6