import React from 'react'
import Headline from '../../components/headline/Headline'
import Section from '../../components/section/Section'

// styles
import './Home.scss'
import HomeHero from './HomeHero'

export default function Home({lights}) {
  return (
    <div className='home'>
        <HomeHero lights={lights} />s
        <Headline>
          <h1>Developer open to work</h1>
        </Headline>
        <Section> 
        <Content1 />
        </Section> 
        <section className='bottom'>
          just to be able to scroll for now
        </section>
    </div>
  )
}

const Content1 = () => {
  return (
  <>
  <h2>
  If you are looking for a developer 
  to bring your ideas to life
  You come to the right place
  </h2>
  <h2>
  I develope useful web experiences
& applications
with focus on creating aesthetic
user interfaces & smart interactions
  </h2>
  <h2>
  Creativity, art, design & technology
  in the hands of the right minds has the tools to solve our future problems.
  </h2>
  </>
)
  }
