import React from 'react';
import { motion } from 'framer-motion';
import Rob1 from '../../Rob1';
import RobBg from '../../RobBg';

// styles
import './Hero.scss';

const transition = { duration: 0.3, ease: [0.6, 0.01, -0.05, 0.9] };

const firstWord = {
  initial: {
    y: 0,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 3,
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
      delayChildren: 3,
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};
const Searching = {
  initial: {
    X: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.1,
      staggerDirection: 1,
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
    transition: { duration: 1, ...transition },
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
    transition: { duration: 1, ...transition },
  },
};

const letter3 = {
  initial: {
    opacity: 0,
    x: 200,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ...transition },
  },
};

export default function Hero() {
  return (
    <div>
      <motion.div className='wrapper'>
        <motion.div
          className='overlay'
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.8, 0.6, 0.2, 0] }}
          exit={{ opacity: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <motion.div initial='initial' animate='animate' className='searching'>
            <motion.p variants={Searching}>
              <motion.span variants={letter3}>s</motion.span>
              <motion.span variants={letter3}>e</motion.span>
              <motion.span variants={letter3}>a</motion.span>
              <motion.span variants={letter3}>r</motion.span>
              <motion.span variants={letter3}>c</motion.span>
              <motion.span variants={letter3}>h</motion.span>
              <motion.span variants={letter3}>i</motion.span>
              <motion.span variants={letter3}>n</motion.span>
              <motion.span variants={letter3}>g</motion.span>
              <motion.span variants={letter3}>.</motion.span>
              <motion.span variants={letter3}>.</motion.span>
              <motion.span variants={letter3}>.</motion.span>
            </motion.p>
          </motion.div>
          <motion.p
            className='wait'
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
          >
            wait...
          </motion.p>
        </motion.div>
        {/* <motion.h1
          initial={{ x: 0, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 2.5, duration: 3 }}
        >
          <motion.span>GOOGLE</motion.span>{' '}
          <motion.span className='google_pro'>PRO?!</motion.span>
        </motion.h1>
        <motion.div
          initial='initial'
          animate='animate'
          className='text-animation'
        >
          <motion.span className='first' variants={firstWord}>
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
            <motion.span variants={letter2}>!</motion.span>
          </motion.span>
        </motion.div>
        */}
      </motion.div>

      <div className='bg'>
        <div className='image_bg'>
          <RobBg />
        </div>
        <div className='image'>
          <Rob1 />
        </div>
      </div>
      <motion.p
        className='youknow'
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0, scale: [1, 0.8, 2, 1.5, 1] }}
        transition={{ delay: 4, duration: 0.6 }}
      >
        if You didn't know, now You know
      </motion.p>
    </div>
  );
}
