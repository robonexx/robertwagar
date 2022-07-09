import React from 'react';
import Hero from './Hero';
import Work from './Work';

// styles
import './Work.scss'

export default function Home() {
  return (
    <div className='home'>
      <Hero />
      <Work />
    </div>
  );
}
