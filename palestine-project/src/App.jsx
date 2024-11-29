import React, { Component, Fragment} from 'react'


import Home from './Components/Home/Home.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Support from './Components/Support/Support.jsx'
import GetInvolved from './Components/Get-Involved/GetInvolved.jsx'
import About from './Components/About/About.jsx'
import Media from './Components/Media/Media.jsx'
import Resourses from './Components/Resourses/Resourses.jsx'
import News from './Components/News/News.jsx'
import Shop from './Components/Shop/Shop.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Counttt from './Components/Counttt/Counttt.jsx'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Home/>
        <Navbar/>
        <GetInvolved/>
        <About/>
        <Media/>
        <Resourses/>
        <News/>
        <Shop/>
        <Support/>
        <Footer/>
        <Counttt/>
      </Fragment>
    )
  }
}




