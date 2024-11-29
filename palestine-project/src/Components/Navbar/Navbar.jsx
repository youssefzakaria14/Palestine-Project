import React, { Component, Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faTwitter , faFacebook } from '@fortawesome/free-brands-svg-icons'
import Logo from '../../../src/Assets/logo.jpg'
import StyleNavbar from './Navbar.module.css'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <header>
            <nav className={`navbar navbar-expand-lg ${StyleNavbar['navbar']}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <img src={Logo} alt="" width="170px" height="65px" />
                    </Link>
                    <form className="d-flex">
                    <input className={`form-control me-2 ${StyleNavbar['form-control']}`} type="search" placeholder="Search" aria-label="Search" />
                        <button className={`btn main-btn ${StyleNavbar['btn']}`} type="submit">
                            <a href="/"><FontAwesomeIcon icon={faMagnifyingGlass} /></a>
                        </button>
                    </form>
                    <div className={`icon-holder1 ${StyleNavbar['icon-holder1']}`}>
                        <a href="/"><FontAwesomeIcon icon={faFacebook} style={{color: "#4162A6",}} /></a>
                    </div>
                    <div className={`icon-holder2 ${StyleNavbar['icon-holder2']}`}>
                        <a href="/"><FontAwesomeIcon icon={faTwitter} /></a>
                    </div>
                    
                    <button  className={`navbar-toggler ${StyleNavbar['navbar-toggler']}`} type="button" data-bs-toggle="collapse" data-bs-target="#main"
                        aria-controls="#main" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="main">
                        
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 px-4 ${StyleNavbar['navbar-nav']}`}>
                        
                            <li className={`nav-item ${StyleNavbar['nav-item']}`}>
                                <Link className={`nav-link ${StyleNavbar['nav-link']}`} to="/GetInvolved" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    GET INVOLVED
                                </Link>
                            </li>

                            <li className={`nav-item ${StyleNavbar['nav-item']}`}>
                                <Link className={`nav-link ${StyleNavbar['nav-link']}`} to="/About" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    ABOUT
                                </Link>
                            </li>

                            <li className={`nav-item ${StyleNavbar['nav-item']}`}>
                                <Link className={`nav-link ${StyleNavbar['nav-link']}`} to="/Media" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    MEDIA
                                </Link>
                            </li>

                            <li className={`nav-item ${StyleNavbar['nav-item']}`}>
                                <Link className={`nav-link ${StyleNavbar['nav-link']}`} to="/Resourses" id="navbarDropdown" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    RESOURSES
                                </Link>
                            </li>

                            <li className={`nav-item ${StyleNavbar['nav-item']}`}>
                                <Link className={`nav-link ${StyleNavbar['nav-link']}`} to="/Shop">SHOP</Link>
                            </li>

                        </ul>
                        <div className={`btn1 ${StyleNavbar['btn1']}`}><Link to="/join" className="btn main-btn ">JOIN US </Link></div>
                        <div className={`btn2 ${StyleNavbar['btn2']}`}><Link to="/Donate" className="btn main-btn ">DONATE </Link></div>

                    </div>
                </div>
            </nav>
        </header>
      </Fragment>
    )
  }
}
