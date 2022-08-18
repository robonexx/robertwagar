import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/components/Nav.module.scss";

export default function NavItem(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const { children, title, url, icon, i } = props;

  const onMouseEnter = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 300) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  return (
    <motion.li
      className={styles.nav_item}
      key={i}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: i % 2 === 0 ? -100 : 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: i * 0.1 }}
    >
      <svg className={styles.svg} viewBox="0 0 54 54">
        <circle className={styles.anicircle} cx="15" cy="27" r="10" />
      </svg>
      <a href={url} onClick={closeMobileMenu} className={styles.nav_links}>
        <span>{icon}</span>
        <span>{title}</span>
      </a>
      {dropdown && children}
      {click && children}
    </motion.li>
  );
}
