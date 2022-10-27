import React, { useReducer, useRef, useEffect } from "react";
import "./slider.scss";

const slides = [
  {
    title: "Family",
    subtitle: "Father To my Sons",
    description: "The two angels that saved me",
    image:
      "https://images.pexels.com/photos/6008345/pexels-photo-6008345.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "The Music",
    subtitle: "Kept me moving",
    description: "And so I danced",
    image:
      "https://images.pexels.com/photos/3104/black-and-white-music-headphones-life.jpg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "The Dance",
    subtitle: "Funk, HipHop, Soul",
    description: "The afro-american culture gave me inspiration & life",
    image:
      "https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "The long road",
    subtitle: "Walking thru life",
    description: "The direction is Up & forward",
    image:
      "https://images.pexels.com/photos/333850/pexels-photo-333850.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    title: "Future",
    subtitle: "Developer",
    description: "Html, Css, Js, React, Node.js, Express, MongoDb etc",
    image:
      "https://images.pexels.com/photos/5240544/pexels-photo-5240544.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
];

function useTilt(active) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : 0,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      />
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">{slide.description}</p>
        </div>
      </div>
    </div>
  );
}

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex: state.slideIndex === 0 ? slides.length : state.slideIndex + 1,
    };
  }
};

const Slider = () => {
  const [state, dispatch] = useReducer(slidesReducer, initialState);

  return (
    <div className="slider">
      <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

      {[...slides, ...slides, ...slides].map((slide, i) => {
        let offset = slides.length + (state.slideIndex - i);
        return <Slide slide={slide} offset={offset} key={i} />;
      })}
      <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
    </div>
  );
};

export default Slider;
