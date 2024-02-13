import React, { useEffect } from 'react'
import "./section4.scss"
import Card1 from '../../components/card1'
import { useSelector, useDispatch } from 'react-redux'
import { getallproducts } from '../../redux/slice/productSlices'
function Section4() {
  const product = useSelector((state) => state.products.product)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getallproducts())
  },[dispatch])
  return (
    <>
    <section className='section4'>
        <div className="container">
          {product&&product.map((elem,i)=>{
            return  <Card1 key={i} elem={elem}/>
          })}
           
        </div>

    </section>
    </>
  )
}

export default Section4