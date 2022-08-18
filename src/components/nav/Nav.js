import React, { useState, useEffect, useRef } from "react";
import NavBtn from "./NavBtn";

// styles
import styles from "../../styles/components/Nav.module.scss";

export default function Nav(props) {
  const [click, setClick] = useState(false);
  const [navActive, setNavActive] = useState(false);

  const handleClick = () => {
    setClick(!click);
    setNavActive(!click);
  };

  const navRef = useRef();

  useEffect(() => {
    if (window.innerWidth > 959) {
      let prevScrollpos = window.pageYOffset;

      const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          navRef.current.classList.add(`${styles.navbar && styles.bgscroll}`);
          navRef.current.classList.remove(`${styles.hide}`);
        } else {
          navRef.current.classList.add(`${styles.hide}`);
          navRef.current.classList.remove(
            `${styles.navbar && styles.bgscroll}`
          );
        }
        prevScrollpos = currentScrollPos;
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
      <button className={styles.menu_btn} onClick={handleClick}>
        <NavBtn navActive={navActive} />
      </button>
      <ul
        className={
          click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`
        }
      >
        {props.children}
      </ul>
    </nav>
  );
}
