import React, { useEffect } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector, useDispatch } from 'react-redux'
import { getallproducts } from '../../redux/slice/productSlices';
import Card1 from '../card1';
function Slider() {
    const product = useSelector((state) => state.products.product)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getallproducts())
  },[dispatch])
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={2}
    slidesPerView={4}
    navigation
    pagination={{ clickable: true }}
   
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    {
        product&&product.map((elem,i)=>{
            return <SwiperSlide key={i} > <Card1 key={i} elem={elem}/></SwiperSlide>
        })
    }
    
  </Swiper>
  )
}

export default Slider