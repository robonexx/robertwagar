import './App.scss';
import Header from './components/header/Header';
import { motion } from 'framer-motion';
import Rob1 from './Rob1';
import RobBg from './RobBg';

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] };

const firstWord = {
  initial: {
    
    y: 0,
  },
  animate: {
   
    y: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const lastWord = {
  initial: {
   
    y: 0,
  },
  animate: {
   
    y: 0,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
const letter = {
  initial: {
    opacity: 0,
    y: -600,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ...transition },
  },
};
const letter2 = {
  opacity: 0,
  initial: {
    y: 400,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ...transition },
  },
};
function App() {
  return (
    <motion.div className='App'>
      <Header />
      <div className='wrapper'>
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
        >
          <motion.span>Who is a</motion.span>
          <motion.span> JEDI ?</motion.span>
        </motion.h1>
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          className='text-animation'
        >
          <motion.span className='text-animation first' variants={firstWord}>
            <motion.span variants={letter}>r</motion.span>
            <motion.span variants={letter}>o</motion.span>
            <motion.span variants={letter}>b</motion.span>
          </motion.span>
          <br /> <br />
          <motion.span className='last' variants={lastWord}>
            <motion.span variants={letter2}>O</motion.span>
            <motion.span variants={letter2}>N</motion.span>
            <motion.span variants={letter2}>E</motion.span>
          </motion.span>
        </motion.div>
      </div>

      <div className='bg'>
        <div className='image_bg'>
          <RobBg />
        </div>
        <div className='image'>
          <Rob1 />
        </div>
      </div>
    </motion.div>
  );
}

export default App;
