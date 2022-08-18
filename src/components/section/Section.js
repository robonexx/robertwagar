import React from "react";

import "./Section.scss";

const Section = ({ children }) => {
  return <div className="grid-3 section">{children}</div>;
};

export default Section;
