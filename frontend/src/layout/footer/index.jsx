import React from 'react'
import "./footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <>
   <footer>
    <div className="container">
        <div className="contacts">
        <div className="contact">
        <p>Blog</p>
        <p>FAQs</p>
        <p>Contact us</p>

</div>
<div className="icons">
<FontAwesomeIcon className='icon' icon={faFacebook} />
<FontAwesomeIcon className='icon' icon={faTwitter} />
<FontAwesomeIcon className="icon" icon={faInstagram} />
<FontAwesomeIcon className='icon' icon={faSkype} />
<FontAwesomeIcon className='icon' icon={faPinterest} />



</div>

        </div>
    
<div className="colorlib">
    ©2018 All Rights Reserverd. This template is made with <FontAwesomeIcon icon={faHeart} style={{color:"red"}}/> by <span style={{color:"red"}}>Colorlib</span>

    
</div>

    </div>
    

   </footer>
    </>
  )
}

export default Footer
