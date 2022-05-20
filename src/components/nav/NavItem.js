import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/components/Nav.module.scss';

export default function NavItem(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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
      key={props.title}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        scale: [0.3, 1.1, 1],
        translateY: [0, 10, 20, 0],
      y: 0}}
    >
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className={styles.nav_links}
      >
        <span className={styles.link_icon}>{props.icon}</span>
        <span className={styles.link_title}>{props.title}</span>
      </a>
      {dropdown && props.children}
      {click && props.children}
    </motion.li>
  );
}
