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
        <motion.p className='joke' variants={lastWord}>
          <motion.span variants={letter}>Seaching for a...</motion.span>
        </motion.p>
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 2 }}
        >
          <motion.span>GOOGLE</motion.span> <motion.span>PRO?!</motion.span>
        </motion.h1>
        <motion.div
          initial='initial'
          animate='animate'
          exit='exit'
          className='text-animation'
        >
          <motion.span className='text-animation first' variants={firstWord}>
            <motion.span variants={letter}>s</motion.span>
            <motion.span variants={letter}>t</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>c</motion.span>
            <motion.span variants={letter}>k</motion.span>
          </motion.span>
          <br /> <br />
          <motion.span className='last' variants={lastWord}>
            <motion.span variants={letter2}>o</motion.span>
            <motion.span variants={letter2}>v</motion.span>
            <motion.span variants={letter2}>e</motion.span>
            <motion.span variants={letter2}>r</motion.span>
            <motion.span variants={letter2}>f</motion.span>
            <motion.span variants={letter2}>l</motion.span>
            <motion.span variants={letter2}>o</motion.span>
            <motion.span variants={letter2}>w</motion.span>
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
