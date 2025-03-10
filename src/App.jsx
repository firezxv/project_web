import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Headerfile  from './components/Headerfile'
import NavbarKeren from './components/NavbarKeren'
import Service from './components/Service'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {  
  const [count, setCount] = useState(0)
  const hello_world = (  <>
    <div>
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
    <p>selamat datang di website kami</p>
    <h5>Under Maintenance</h5>
  </>);
  return (
  <>
    <NavbarKeren/>
    <Headerfile />
    <Service/>
    <About/>
    <Contact/>
    <Footer/>
  </>
  )
}

export default App
