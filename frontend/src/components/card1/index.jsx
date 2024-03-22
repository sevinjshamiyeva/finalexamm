import React from 'react'
import "./card1.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useSelector, useDispatch } from 'react-redux'
import { addWishlist } from '../../redux/slice/wishlistSlices';



function Card1({elem}) {
  const product = useSelector((state) => state.products.product)
  const dispatch=useDispatch()

  return (
    <>
    <div className="card">
        <div className="cardImg">

<img className='img' src={elem.img} alt="" />

        </div>
        <div className="cardDetail">
        <FontAwesomeIcon className='icon' icon={faHeart} onClick={()=>{
          dispatch(addWishlist(elem))
          console.log(addWishlist(elem))
        }} />
           <h4>{elem.name}</h4>
           <h3>${elem.price}</h3>
        </div>
        <div className="btn" onClick={()=>{
        }}>
            add to cart
        </div>
    </div>
    </>
  )
}

export default Card1