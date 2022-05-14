import './App.scss';
import Rob1 from './Rob1';
import RobBg from './RobBg';

import { motion } from 'framer-motion';
import Logo from './logo/Logo';
const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] };

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
    y: -600,
  },
  animate: {
    y: 0,
    transition: { duration: 1.2, ...transition },
  },
};
const letter2 = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1.2, ...transition },
  },
};
function App() {
  return (
    <motion.div className='App'>
      <Logo />
      <div className='wrapper'>
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
        >
          <motion.span>FEAR OF THE</motion.span>
          <motion.span> DARKSIDE ?</motion.span>
        </motion.h1>
        <motion.div initial='initial' animate='animate' exit='exit'>
          <motion.span className='text-animation first' variants={firstWord}>
            <motion.span variants={letter}>F</motion.span>
            <motion.span variants={letter}>E</motion.span>
            <motion.span variants={letter}>A</motion.span>
            <motion.span variants={letter}>R</motion.span>{' '}
            <motion.span variants={letter}>O</motion.span>
            <motion.span variants={letter}>F</motion.span>{' '}
            <motion.span variants={letter}>T</motion.span>
            <motion.span variants={letter}>H</motion.span>
            <motion.span variants={letter}>E</motion.span>
          </motion.span>
          <br /> <br />
          <motion.span className='text-animation last' variants={lastWord}>
            <motion.span variants={letter2}>D</motion.span>
            <motion.span variants={letter2}>A</motion.span>
            <motion.span variants={letter2}>R</motion.span>
            <motion.span variants={letter2}>K</motion.span>
            <motion.span variants={letter2}>S</motion.span>
            <motion.span variants={letter2}>I</motion.span>
            <motion.span variants={letter2}>D</motion.span>
            <motion.span variants={letter2}>E</motion.span>
            <motion.span variants={letter2}>?</motion.span>
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
