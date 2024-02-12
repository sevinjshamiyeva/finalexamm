import React from 'react'
import "./card1.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function Card1() {
  return (
    <>
    <div className="card">
        <div className="cardImg">

<img className='img' src="https://preview.colorlib.com/theme/coloshop/images/product_1.png.webp" alt="" />

        </div>
        <div className="cardDetail">
        <FontAwesomeIcon className='icon' icon={faHeart} />
           <h4>fdfs</h4>
           <h3>jkhgfds</h3>
        </div>
        <div className="btn">
            add to cart
        </div>
    </div>
    </>
  )
}

export default Card1