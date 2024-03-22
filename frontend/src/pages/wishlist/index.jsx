import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import Card1 from '../../components/card1';
import Header from '../../layout/header';
import Footer from '../../layout/footer';


function Wishlist() {
  const wishlist = useSelector((state) => state.wishlists.wishlist);

  return (
    <>
    <Header/>
    <div className="container" style={{display:'flex',gap:"10px",marginTop:"25px",minHeight:'400px',flexWrap:"wrap",justifyContent:"space-between"}}>
    {
      wishlist&&wishlist.map((elem,i)=>{
      return  <Card1 elem={elem} key={i}/>
      })
    }
    </div>
    <Footer/>
    
    </>
  )
}

export default Wishlist