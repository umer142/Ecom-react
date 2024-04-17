import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png"


const NavItems = () => {

  const [menuToggle, setMenyToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);


  // add event listner 

  window.addEventListener("scroll", () => {
    if (window.scroll > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false)

    }

  })

  return (
    <header className={`header-section style-5  ${headerFixed ? "header-fixed fadeInUp" : ""} `}>
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className='container'>
          <div className="header-top-area">
            <Link to="/sign-up" className='lab-btn me-3'  ><span>Creat New Account</span></Link>
            <Link to="/login" ><span>Login</span></Link>
          </div>
        </div>
      </div>

      {/* header bottom  */}

      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo */}
            <div className="logo-search-acte">
              <div className="logo ">
                <Link to={'/'}>
                  <img className="img-fluid navbar-logo small-logo" src={logo} alt="Logo" style={{ maxWidth: '100px' }} />
                </Link>
              </div>
            </div>
            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`} >
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/shop" >Shop</Link></li>
                  <li><Link to="/blog" >Blog</Link></li>
                  <li><Link to="/about" >About</Link></li>
                  <li><Link to="/contact" >Contact</Link></li>
                </ul>
              </div>
              {/* signin /login  */}
              <Link to='/sign-up' className='lab-btn me-3 d-none d-md-block'> Creat Account</Link>
              <Link to='/login' className=' d-none d-md-block'> Login</Link>

              {/* menu toggler */}
              <div onClick={() => { setMenyToggle(!menuToggle) }} className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              {/* social toggler */}
              <div className='ellepsis-bar d-md-none '  onClick={()=>{setSocialToggle(!socialToggle)}}>
              <i className="icofont-info-square"></i>
              </div>
            </div>

          </div>
        </div>
      </div>





    </header>
  )
}

export default NavItems
