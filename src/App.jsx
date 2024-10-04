// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './Components/Navbar'
import Navbar_small from './Components/Navbar_small'
import Landing from './Components/Landing'
import PR from './Components/PR'
import Pre_Landing from './Components/Pre_Landing'
import FAQs from './Components/FAQs'
import Feedback from './Components/Feedback'
import Footer from './Components/Footer'
import Intro from './Components/Intro'
import Pricing from './Components/Pricing'
import Services from './Components/Services'
import Newsroom from './Components/Newsroom'
import Contact from './Components/Contact'
import React, { useState, useEffect } from 'react';

// import './App.css'

const NAV = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 991);

  const handleResize = () => {
    setIsLargeScreen(window.innerWidth > 991);
  };

  useEffect(() => {
    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return ( isLargeScreen ? <Navbar /> : <Navbar_small/> );
};

function App() {
   
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
      <NAV/>
      {/* <Pre_Landing/> */}
      <Landing/>
      <Intro/>
      <Services/>
      <Pricing/>
      <Feedback/>
      <Newsroom/>
      <PR/>
      <FAQs/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App