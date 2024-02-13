import React from 'react'
import "./section7.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTruck,faMoneyBill1, faArrowRotateLeft, faClock } from '@fortawesome/free-solid-svg-icons'

function Section7() {
  return (
    <>
    <section className='section7'>
        <div className="container">
            <div className="info">
                <div className="icon">

                </div><FontAwesomeIcon icon={faTruck} style={{color: "#FE4C50",fontSize:"30px"}} />
                <div className="detail">
                    <h5>FREE SHIPPING</h5>
                    <p id='free'>Suffered Alteration in Some Form

</p>

                </div>

            </div>
            <div className="info">
            <div className="icon">

</div><FontAwesomeIcon icon={faMoneyBill1} style={{color: "#FE4C50",fontSize:"35px"}} />
<div className="detail">
    <h5>CACH ON DELIVERY</h5>
    <p id='free'>The Internet Tend To Repeat

</p>

</div>
</div>
<div className="info">
<div className="icon">

</div><FontAwesomeIcon icon={faArrowRotateLeft} style={{color: "#FE4C50",fontSize:"35px"}} />
<div className="detail">
    <h5>45 DAYS RETURN</h5>
    <p id='free'>Making it Look Like Readable

</p>

</div>

</div>
<div className="info">
<div className="icon">

</div><FontAwesomeIcon icon={faClock} style={{color: "#FE4C50",fontSize:"35px"}} />
<div className="detail">
    <h5>OPENING ALL WEEK</h5>
    <p id='free'>8AM - 09PM
</p>

</div>

</div>


        </div>

    </section>
    </>
  )
}

export default Section7