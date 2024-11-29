import React, { Component, Fragment } from 'react'
import Stylesupport from './support.module.css'


export default class Support extends Component {
  render() {
    return (
      <Fragment>
        <section className={`sec10 ${Stylesupport['sec10']}`}>
            <div className="container pt-5">
                <h2 class="fw-bold fs-1">Support us</h2>
                <div className="row">


                    <div className="col-lg-4">
                        <div className={`pic1 pic10 ${Stylesupport['pic1']} ${Stylesupport['pic10']}`}>
                            <div className="card-text ms-4 pt-4 pb-3 ">
                                <h3>Join us</h3>
                                <p>We are led by our members who set <br /> campaigns and vote on our priorities.</p><br/><br/>
                                <article>We are only strong because we stand together <br/> - join us.</article>
                                <br/><br/><br/><br/><br/>
                                <a href="/JoinUs"><button className={`w-75 text-center btn5 ${Stylesupport['btn5']}`}> Join</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className={`pic2 pic10 ${Stylesupport['pic2']} ${Stylesupport['pic10']}`}>
                            <div className="card-text ms-4 pt-4 pb-3 ">
                                <h3>Shop</h3>
                                <p>Visit our online shop for t-shirts, keffiyehs, <br/> accessories and many more
                                Palestine-related <br/> products.</p> <br/><br/>
                                <article>All proceeds go towards funding our crucial campaigns.</article>
                                <br/><br/><br/><br/>
                                <a href="/Shop"><button className={`w-75 text-center btn5 btn-1 ${Stylesupport['btn5']} ${Stylesupport['btn-1']}`}>shop</button></a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className={`pic3 pic10 ${Stylesupport['pic3']} ${Stylesupport['pic10']}`}>
                            <div className="card-text ms-4 pt-4 pb-3 ">
                                <h3>Donate</h3>
                                <p>We rely on donations from our supporters, <br/> without which we wouldn’t exist.</p> <br/>
                                <article>Together we are building a grassroots <br/> campaign to challenge government policy,
                                    tell <br/>companies to stop profiting from Israel’s <br/> illegal occupation, and hold the
                                    media to <br/> account.
                                </article>
                                <br/><br/><br/>
                                <a href="/Donate"><button className={`w-75 text-center btn5 btn5-2 ${Stylesupport['btn5']} ${Stylesupport['btn5-2']}`}>DONATE</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
      </Fragment>
    )
  }
}
