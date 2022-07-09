import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import { motion } from 'framer-motion';
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <motion.div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </motion.div>
  );
}

export default App;
