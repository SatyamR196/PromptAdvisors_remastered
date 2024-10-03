import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Navbar from './Components/Navbar'
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

// import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
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
    </>
  )
}

export default App

{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> 

*/}
