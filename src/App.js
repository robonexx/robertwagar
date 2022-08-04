import {useState, useRef} from 'react'
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import { motion } from 'framer-motion';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Theme from './components/theme/Theme';

function App() {
  const [lights, setLights] = useState(false)
  const bgRef = useRef()
    
      const lightsOnOff = () => {
          setLights(!lights)
          lights ? bgRef.current.style.backgroundColor = '#fafafa' : bgRef.current.style.backgroundColor = '#1b1b1b'
      }
  return (
    <motion.div className='App' ref={bgRef}>
        <Header />
        <Theme lights={lights} setLights={setLights} lightsOnOff={lightsOnOff}/>
        <Routes>
          <Route path="/" element={<Home lights={lights}/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </motion.div>
  );
}

export default App;
