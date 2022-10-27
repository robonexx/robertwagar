import React from "react";
import GlobalArt from "../../assets/svg/GlobalArt";

import Section from "../../components/section/Section";
import About from "../About/About";

// styles
import "./Home.scss";
import HomeHero from "./HomeHero";

export default function Home({ lights }) {
  return (
    <div className="home">
      <HomeHero lights={lights} />

      <About />

      <Section>
        <Content1 />
      </Section>
      <section className="bottom">just to be able to scroll for now</section>
    </div>
  );
}

const Content1 = () => {
  return (
    <>
      <h2>
        Looking for a developer to bring your <b>ideas to life</b>? <br />
        You've come to the right place.
      </h2>
      <h2>
        I develope <b>useful web experiences</b> & <b>applications</b> with
        focus on creating
        <b> aesthetic user interfaces</b> & <b>smart interactions</b>
      </h2>
      <h2>
        <b>Creativity, art, design & technology</b> in the hands of the right
        minds has the tools to <b>solve</b> our future <b>problems</b>.
      </h2>
      <div className="svg_container">
        <GlobalArt />
      </div>

      <h2>
        <b>Design </b> should be equally about what it does as much as how it{" "}
        <b>attracts the eye</b>.
      </h2>
      <h2>
        As a developer I'm focused on <b>finding</b> the <b>best solutions</b>{" "}
        for you problems. And we will <b>work together</b> to do so.
      </h2>
    </>
  );
};
