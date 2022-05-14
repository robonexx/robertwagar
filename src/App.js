import './App.css';
import Rob1 from './Rob1';
import RobBg from './RobBg';
import Rob12 from './Rob1';
import Rob2Bg from './RobBg';

import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div className='App'>
      <motion.h1>FEAR OF THE DARKSIDE?</motion.h1>

      <div className='bg'>
        <div className='image_bg'>
          <RobBg />
        </div>
        <div className='image'>
          <Rob1 />
        </div>
      </div>

    
        <div className='bg2'>
          <div className='image_bg2'>
            <Rob2Bg />
          </div>
          <div className='image2'>
            <Rob12 />
          </div>
        </div>
     
    </motion.div>
  );
}

export default App;
