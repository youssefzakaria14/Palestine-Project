import React from 'react';
import ReactDOM from 'react-dom/client';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import reportWebVitals from './reportWebVitals';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import GetInvolved from './Components/Get-Involved/GetInvolved.jsx';
import About from './Components/About/About.jsx';
import Media from './Components/Media/Media.jsx';
import Resourses from './Components/Resourses/Resourses.jsx';
import Shop from './Components/Shop/Shop.jsx';
import Articles from './Components/articles/articles.jsx';
import Articles2 from './Components/Articles.2/Articles_2.jsx';
import Articles3 from './Components/Articles.3/Articles_3.jsx';
import Articles4 from './Components/Articles.4/Articles_4.jsx';
import Articles5 from './Components/Articles..5/Articles_5.jsx';
import Events1 from './Components/Events_1/Events_1.jsx';
import Events2 from './Components/Events_2/Events_2.jsx';
import Events3 from './Components/Events_3/Events_3.jsx';
import Events4 from './Components/Events_4/Events_4.jsx';
import Events5 from './Components/Events_5/Events_5.jsx';
import Social from './Components/Social/Social.jsx';
import Main from './Components/Main/Main.jsx';
import Campaingns from './Components/Campaigns/Campaigns.jsx';
import Problem from './Components/Problem/Problem.jsx';
import Test from './Components/Testt/Test.jsx';
import Counttt from './Components/Counttt/Counttt.jsx';
import Historyy from './Components/Historyy/Historyy.jsx';
import JOIN from './Components/JOIN/JOIN.jsx';
import JoinUs from './Components/JOIN/joinUs.jsx';
import Donate from './Components/Donate/Donate.jsx';
import Support from './Components/Support/Support.jsx';

const router = createBrowserRouter([
  {
    path: "/Navbar",
    element: <Navbar/>,
    errorElement:  <h1>sorry</h1>
  },

  {
    path: "/GetInvolved",
    element: <GetInvolved/>,
    errorElement:  <h1>sorry</h1>
  },

  {
    path: "/About",
    element: <About/>,
    errorElement:  <h1>sorry</h1>
  },

  {
    path: "/Media",
    element: <Media/>,
    errorElement:  <h1>sorry</h1>
  },

  {
    path: "/Resourses",
    element: <Resourses/>,
    errorElement:  <h1>sorry</h1>
  },

  
  {
    path: "/Support",
    element: <Support/>,
    errorElement:  <h1>sorry</h1>
  },

  {
    path: "/Shop",
    element: <Shop/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Articles",
    element: <Articles/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Articles_2",
    element: <Articles2/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Articles_3",
    element: <Articles3/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Articles_4",
    element: <Articles4/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Articles_5",
    element: <Articles5/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Events_1",
    element: <Events1/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Events_2",
    element: <Events2/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Events_3",
    element: <Events3/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Events_4",
    element: <Events4/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Events_5",
    element: <Events5/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Socal",
    element: <Social/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Main",
    element: <Main/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Campaingns",
    element: <Campaingns/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Problem",
    element: <Problem/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Test",
    element: <Test/>,
    errorElement:  <h1>sorry</h1>
  },

  {
    path: "/Counttt",
    element: <Counttt/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/Historyy",
    element: <Historyy/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/JOIN",
    element: <JOIN/>,
    errorElement:  <h1>sorry</h1>
  },
  {
    path: "/JoinUs",
    element: <JoinUs/>,
    errorElement:  <h1>sorry</h1>
  },

  {
    path: "/Donate",
    element: <Donate/>,
    errorElement:  <h1>sorry</h1>
  },
  
  {
    path: "/",
    element: <Home/>,
    errorElement:  <h1>sorry</h1>
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
