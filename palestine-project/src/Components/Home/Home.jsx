import React, { Component, Fragment } from 'react';

import './Home.css';
import image5 from '../../Assets/graphicquote-340x340.jpg';
import image6 from '../../Assets/thumbs_b_c_18000f3886a11dd4ca5669ed373a3c8e-340x340.jpg';
import photos from '../../Assets/download-5.png';
import photos3 from '../../Assets/Arms-Trade-Statement-340x340.png';
import posted_6 from '../../Assets/PSC-TU-Conf-24.jpg';
import posted_7 from '../../Assets/Barclays-Tesco-5-e1728552196270.png';
import posted_8 from '../../Assets/DoA19Oct-e1728635564684.jpg';
import posted_9 from '../../Assets/PSC-Event-Poster-1-e1727257634918.jpg';
import posted_11 from '../../Assets/Divestment-Graphic-04-e1721382161898-340x340.jpg';
import Navbar from '../Navbar/Navbar.jsx';
import 'react-router-dom';
import Social from '../Social/Social.jsx'
import Footer from '../Footer/Footer.jsx';
import vedio from "../../Assets/palestine.mp4";
import Main from '../Main/Main.jsx';
import Support from '../Support/Support.jsx';



 export default class Home extends Component {
    render () {
        return (


            <Fragment>
              <Navbar/>
              
    
    
              <section className="first-page">
              <div className="background-video-container">
                <video autoPlay loop muted className="background-video">
                  <source src={vedio} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="content position-absolute top-50 start-50 translate-middle ">
                  <div className="main22">
                    <h1>
                      Stop the attacks on Gaza!
                      <br />
                      Take action for Palestine
                    </h1>
                  </div>
    
                  <div className="button">
                    <a className="btn bg-danger" href="Main">
                      Click Here
                    </a>
                  </div>
                </div>
              </div>
              </section>
    
              {/* -------------------------------------------counter--------------------------------------------------- */}
    
              <Main/>
               
                
    
    
    
    {/* -----------------------------------------------Article----------------------------------------------------------- */}
    
    
                <section className="home">
                  <h1>Articles</h1>
                    <div className="header">
                        <div className="card-home">
                        <a href="/Articles">
                            <img src={image5} alt="" />
                            <p className='dark'>7 oct 2024</p>
                                <h2>After One Year of Genocide – Uphold International Law, Stop Arming Israel Now</h2> 
                        </a>
                        </div>
                        
    
    
                        
                        <div className="support-free">
                          <a href="/Articles_2">
                            <div className="carde">
                                <div className="right">
    
                                    <img src={photos} alt="" />
    
                                    <div className="writes">
                                        <h2> <span>1 oct 2024</span>   PCS calls for sanctions in response to Israel’s bombing and invasion of Lebanon</h2>
                                    </div>
                                </div>
                                <a href="/" className="link" >read more</a>
                            </div>
                            </a>
    
    
                            <a href="/Articles_3">
                            <div className="carde">
                                <div className="right">
                                    <img src={photos3} alt="" />
                                    <div className="writes">
                                        <h2><span>1 oct 2024</span>Joint Statement on UK-Israel Arms Trade</h2>
                                    </div>
                                </div>
                                <a href="/" className="link" >read more</a>
                            </div>
                            </a>
    
                            <a href="/Articles_4">
                            <div className="carde">
                                <div className="right">
                                    <img src={posted_11} alt="" />
                                    <div className="writes">
                                        <h2><span>1 oct 2024</span>After One Year of Genocide – Uphold International Law, Stop Arming Israel Now</h2>
                                    </div>
                                </div>
                                <a href="/" className="link" >read more</a>
                            </div>
                            </a>
    
    
                            <a href="/Articles_5">
                            <div className="carde">
                                <div className="right">
                                    <img src={image6} alt="" />
                                    <div className="writes">
                                        <h2><span>1 oct 2024</span> ICJ ruling finds Israel guilty of unlawful occupation and apartheid</h2>
                                    </div>
                                </div>
                                <a href="/" className="link" >read more</a>
                            </div>
                            </a>
    
                        </div>
    
                    </div>
                </section>
    
    {/* -----------------------------------------------Events----------------------------------------------------------- */}
    
                <section className="home-1 bg-light">
                  <h1>Events</h1>
                    <div className="header-1">
    
                        
                        <div className="card-home-1">
                          <a href="/Events_1">
    
                              <img src={posted_6} alt="" />
                              <p>7 oct 2024</p>
                              <h2>PSC Conference: Trade Unions Building Solidarity with Palestine </h2>
                          </a>
                        </div>
                        
    
    
    
                        <div className="support-free-1">
    
    
                            <a href="/Events_2">
                            <div className="carde-1">
    
                                <div className="right-1">
    
                                    <img src={posted_7} alt="" />
    
                                    <div className="writes-1">
                                        <h2> <span>1 oct 2024</span> FETTER LANE
                                            posted:No to Barclay Buying Tesco Bank </h2>
                                    </div>
                                </div>
                                <a href="/" className="link-1">read more</a>
                            </div>
                            </a>
                            <a href="/Events_3">
                            <div className="carde-1">
                                <div className="right-1">
                                    <img src={posted_8} alt="" />
                                    <div className="writes-1">
                                        <h2><span>1 oct 2024</span>Day of Action for Palestine – 19 October 2024</h2>
                                    </div>
                                </div>
                                <a href="/" className="link-1">read more</a>
                            </div>
                            </a>
    
                            <a href="/Events_4">
                            <div className="carde-1">
                                <div className="right-1">
                                    <img src={posted_9} alt="" />
                                    <div className="writes-1">
                                        <h2><span>1 oct 2024</span>Lambeth for Divestment Lobbies</h2>
                                    </div>
                                </div>
                                <a href="/" className="link-1">read more</a>
                            </div>
                            </a>
    
    
                            <a href="/Events_5">
                            <div className="carde-1">
                                <div className="right-1">
                                    <img src={photos} alt="" />
                                    <div className="writes-1">
                                        <h2><span>1 oct 2024</span> Wandsworth: Stop Funding Genocide</h2>
                                    </div>
                                </div>
                                <a href="/" className="link-1" >read more</a>
                            </div>
                            </a>
    
    
                        </div>
    
                    </div>
                </section>
                <Support/>
    
    
    
                <Social/>
                <Footer/>
    
    
    
            </Fragment >
        );
    

    }
 }


   





