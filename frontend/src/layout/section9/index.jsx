import React from 'react'
import "./section9.scss"

function Section9() {
  return (
    <div  className='section9'>
        <div className="container">
            <div className="text">
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter and get 20% off your first purchase</p>

            </div>
            <div className="mail">
                <input type="text" placeholder='your email' className='input' />
                <button className='btn'>subscribe</button>
            </div>

        </div>
      
    </div>
  )
}

export default Section9
