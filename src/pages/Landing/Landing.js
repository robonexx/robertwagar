import React, { useRef } from "react";
import "./Landing.scss";
import dreams from "../../assets/images/unknown.jpg";
import { useSpring, animated, useChain } from "react-spring";

function Landing() {
  const text1Ref = useRef();
  const text2Ref = useRef();
  const text3Ref = useRef();
  const text4Ref = useRef();
  const imgRef = useRef();

  const welcomeText = useTextAnimation(text1Ref);
  const welcomeText2 = useTextAnimation(text2Ref);
  const welcomeText3 = useTextAnimation(text3Ref);
  const welcomeText4 = useTextAnimation(text4Ref);

  const imageStyle = useSpring({
    from: {
      opacity: 0,
      position: "absolute",
      transform: "scale(0.1)",
      top: "10%",
    },
    to: [
      {
        opacity: 1,
        position: "absolute",
        top: "10%",
        transform: "scale(1)",
      },
      /* {
    opacity: 0,
    transform: "scale(0.1)",
  } */
    ],
    config: { duration: 6000 },
    ref: imgRef,
  });

  useChain([text1Ref, text2Ref, text3Ref, text4Ref, imgRef]);

  return (
    <div className="landing">
      <animated.h1 style={welcomeText}>Thank you for you time</animated.h1>
      <animated.h1 style={welcomeText2}>
        If you want to check the project
      </animated.h1>
      <animated.h1 style={welcomeText3}></animated.h1>
      <animated.h1 style={welcomeText4}>WEBSITE!</animated.h1>

      <animated.img src={dreams} style={imageStyle} height={800} alt="" />
    </div>
  );
}

const useTextAnimation = (ref) => {
  const spring = useSpring({
    from: {
      opacity: 0,
      position: "absolute",
      top: "40%",
      transform: "scale(0.2)",
      /* left: "-110%", */
    },
    to: [
      {
        opacity: 1,
        position: "absolute",
        top: "40%",
        transform: "scale(2)",
        /* left: "0" */
      },
      {
        opacity: 0,
        transform: "scale(0.3)",
      },
    ],
    ref: ref,
  });
  return spring;
};

export default Landing;
