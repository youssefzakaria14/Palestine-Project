import React, { Fragment } from 'react';
import CountUp from "react-countup";
import image1 from '../../Assets/logo.svg'
import image2 from '../../Assets/press.svg'
import image3 from '../../Assets/Mat_female.svg'
import image4 from '../../Assets/Mat.svg'
import 'react-router-dom';



const statscounter = () => {


    return (


        <Fragment>
          {/* -------------------------------------------counter--------------------------------------------------- */}

          
            <section className="hop bg-light">

                <div className="data">



                    <div className="row">
                        <div className="col-md-3">
                            <div className="for">
                                <div className="images">
                                    <img src={image1} alt="" />
                                </div>
                                <p className="land-4" >  <CountUp start={0} end={41000} duration={22} /></p>
                                <h2 className="landing-4">martyrs of  Gaza </h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="for">
                                <div className="images">
                                    <img src={image2} alt="" />
                                </div>
                                <p className="land"><CountUp start={0} end={175} duration={22} /></p>
                                <h2 className="landing">martyrs of the press</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="for">
                                <div className="images">
                                    <img src={image3} alt="" />
                                </div>
                                <p className="land-4" ><CountUp start={0} end={11487} duration={22} /></p>
                                <h2 className="landing-4">women-gaza strip</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="for">
                                <div className="images ">
                                    <img src={image4} alt="" />
                                </div>
                                <p className="land" ><CountUp start={0} end={2419} duration={22} /></p>
                                <h2 className="landing">elderly-gaza strip</h2>
                            </div>
                        </div>



                    </div>
                </div>
            </section>
        </Fragment >
    );
}




export default statscounter;
