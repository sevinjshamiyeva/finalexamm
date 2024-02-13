import React from 'react'
import "./card1.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';


function Card1({elem}) {
  return (
    <>
    <div className="card">
        <div className="cardImg">

<img className='img' src={elem.img} alt="" />

        </div>
        <div className="cardDetail">
        <FontAwesomeIcon className='icon' icon={faHeart} />
           <h4>{elem.name}</h4>
           <h3>${elem.price}</h3>
        </div>
        <div className="btn">
            add to cart
        </div>
    </div>
    </>
  )
}

export default Card1