import React, { useState } from 'react';

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
    <li
      className={styles.nav_item}
      key={props.title}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
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
    </li>
  );
}
