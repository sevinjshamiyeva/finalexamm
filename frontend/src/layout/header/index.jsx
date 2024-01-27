import React from 'react'
import "./header.scss"
import { Avatar, Badge, Space } from 'antd';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass,faUserPlus,faCartShopping,faBars } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <>
    <header>
        <div className="container">
            <div className="coloshop">
            <Link className='link' to="/"> <span id='colo'>COLO</span>
                <span id='shop'>SHOP</span>
</Link>
               
            </div>
            <div className="rightHeader">
            <ul>
       
        
        <li><Link className='link' to="/wishlist">Wishlist</Link></li>
        <li><Link  className='link' to="/addpages">AddPages</Link></li>
    </ul>
    <div className="icons">
    <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
    <FontAwesomeIcon className="icon" icon={faUserPlus} />
    <Badge className="icon badge" count={5}>
    
    <Avatar  shape="circle" size="large">
    <Link to="/basket">
      
    <FontAwesomeIcon icon={faCartShopping} style={{color:"black"}} />
    </Link>
    </Avatar>
    
  </Badge>
  <span className='menu icon' >
  <FontAwesomeIcon icon={faBars} />
  </span>
       

       
    </div>
    


            </div>


        
        </div>
        
    </header>
    </>
  )
}

export default Header

