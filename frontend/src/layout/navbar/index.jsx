import React from 'react'
import "./navbar.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <>
    <nav>
        <div className="container">
            <div className="left">FREE SHIPPING ON ALL U.S ORDERS OVER $50</div>
            <div className="right">
                <div className="usd">USD <FontAwesomeIcon icon={faChevronDown} /></div>
                <div className="english">English  <FontAwesomeIcon icon={faChevronDown}/></div>
                <div className="account">My account <FontAwesomeIcon icon={faChevronDown}/></div>
                </div>

        </div>


    </nav>
    
    </>
  )
}

export default Navbar