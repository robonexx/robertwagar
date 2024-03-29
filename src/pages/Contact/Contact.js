import React from "react";
import { motion } from "framer-motion";

// styles
import "./Contact.scss";
import Meeting from "../../assets/svg/Meeting";

const Contact = ({ lights }) => {
  let Col = lights ? "white" : "black";

  return (
    <>
      <motion.div className="contact">
        <CoffeeSvg lights={lights} />
        <div className="meeting" style={{ color: Col }}>
          <div className="contact-text">
            <p>Contact us</p>
            <p>Let us make your dreams reality</p>
          </div>
          <Meeting />
          <h2>Book a meeting and Lets talk!</h2>
        </div>
      </motion.div>
      <motion.div className="contact_form">Form goes here</motion.div>
    </>
  );
};

export default Contact;

const CoffeeSvg = ({ lights }) => {
  let col = lights ? "white" : "black";

  return (
    <>
      <motion.svg
        className="coffee"
        viewBox="0 0 110 811"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M86.0125 -146C86.0125 -146 86.0125 -146 86.0125 153.023H10.803C8.20003 153.023 6.09004 155.245 6.09004 157.986V162.619C6.09004 209.024 18.5027 234.774 61.1555 238.744H101.216C57.1409 238.744 19.2048 226.645 22.0327 157.986H94.2603V153.023H160.991C163.594 153.023 165.704 155.245 165.704 157.986V164.188C165.704 204.009 153.539 243.125 109.464 243.125C139.396 243.125 186.111 243.125 186.111 243.125C187.727 243.125 188.594 245.124 187.536 246.41L183.93 251.894H86.0125H1.88833L0.345324 246.25C-0.531296 244.934 0.362261 243.125 1.88833 243.125H101.216V261.818C126.286 261.818 159.883 261.818 159.883 261.818C170.349 261.818 157.37 267.773 157.37 267.773H23.1446C19.2404 267.773 16.0751 264.44 16.0751 260.329H86.0125V1067.5M125.116 230.041C124.041 230.041 123.015 229.393 122.54 228.297C121.893 226.8 122.521 225.034 123.942 224.353C146.038 213.758 149.951 180.897 149.988 180.566C150.17 178.933 151.579 177.765 153.126 177.957C154.677 178.149 155.787 179.629 155.605 181.262C155.438 182.748 151.251 217.801 126.286 229.772C125.906 229.954 125.508 230.041 125.116 230.041ZM132.185 171.632C132.185 175.742 129.02 179.075 125.116 179.075C121.211 179.075 118.046 175.742 118.046 171.632C118.046 167.521 121.211 164.188 125.116 164.188C129.02 164.188 132.185 167.521 132.185 171.632ZM112.999 200.039C112.999 204.15 109.834 207.482 105.929 207.482C102.025 207.482 98.8596 204.15 98.8596 200.039C98.8596 195.928 102.025 192.596 105.929 192.596C109.834 192.596 112.999 195.928 112.999 200.039Z"
          initial={{ strokeDashoffset: 0, pathLength: 0 }}
          animate={{
            strokeDashoffset: 1,
            pathLength: 1,
            strokeWidth: 2,
            stroke: col,
          }}
          transition={{ duration: 2, delay: 0.1 }}
        />
      </motion.svg>
    </>
  );
};
