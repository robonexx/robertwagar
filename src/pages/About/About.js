import React from 'react';
import Hero from './Hero';
import Work from './Work';

// styles
import './Work.scss'

export default function About() {
  return (
    <div className='about'>
      <Hero />
      <Work />
    </div>
  );
}
