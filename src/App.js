import {useState, useRef} from 'react'
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import { motion } from 'framer-motion';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Theme from './components/theme/Theme';
import Contact from './pages/Contact/Contact';
/* import Landing from './pages/Landing/Landing'; */

function App() {
  const [lights, setLights] = useState(false)
  const bgRef = useRef()
    
      const lightsOnOff = () => {
          setLights(!lights)
          /* going to change this to choose dark / ligth mode */
          lights ? bgRef.current.style.backgroundColor = '#F2E5D7' : bgRef.current.style.backgroundColor = '#282422'
      }
  return (
    <motion.div className='App' ref={bgRef}>
        <Header />
        <Theme lights={lights} setLights={setLights} lightsOnOff={lightsOnOff}/>
        <Routes>
          <Route path="/" element={<Home lights={lights}/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact lights={lights}/>}/>
          {/* <Route path="/landing" element={<Landing/>}/> */}
        </Routes>
    </motion.div>
  );
}

export default App;
