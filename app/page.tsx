'use client'

import React, { useState, useEffect, useRef, useLayoutEffect, Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

/*import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min'; */
//import './index.css';
import Me from '../public/me.jpg';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Resume from "../pages/Resume";
import About from "../pages/About";
import NavBar from "./NavBar";
import Image from 'next/image';
//Author: Ross Snyder
//2022
const projectInfo = {"Test Project 1": "Example Text", "Test Project 2": "Example Text", "Test Project 3": "Example Text", "Test Project 4": "Example Text"};
const NavigationDefault: [string, string][] = [ ["/Home","Home"], ["/Resume","Resume"], ["/Projects","Projects"], ["/About","About"] ]


//the full page
function Page(props) {

  const initialState = {
    title: "Home",
    navigation: ["Home", "Resume", "Projects", "About"]
    //barPos: "bottom"
  }

  const [state, setState] = useState(initialState);
  function setTitle(nTitle){
    const old = state;
      setState({
      title: nTitle,
      navigation: old.navigation
    });
    console.log(nTitle)
  }
  //default is home, also setting the default page names and bar position to be passed to children
    //const now = useRef("Home");
  
  return (
    <div class="h-screen w-screen">
      <NavBar props={NavigationDefault}>
      </NavBar>
          <div class="h-92 w-auto">{props.children}</div>
    </div>
  );
}


function App() {

  
    return (
        <div class="h-screen w-auto overflow-x-hidden flex bg-[url('../public/background.jpg')] bg-no-repeat bg-cover">
          <Router>
            <Routes>
              <Route index element={<Page><Home/></Page>} />
              <Route path="/Projects" element={<Page><Projects projectInfo={projectInfo} /></Page>} />
              <Route path="/Resume" element={<Page><Resume/></Page>} />
              <Route path="/About" element={<Page><About portrait={Me} /></Page>} />
            </Routes>
            </Router>
        </div>
    
  );
}

export default App;
