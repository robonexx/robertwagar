import React from 'react'

// styles
import './Home.scss'
import HomeHero from './HomeHero'

export default function Home({lights}) {
  return (
    <div className='home'>
        <HomeHero lights={lights} />
    </div>
  )
}
