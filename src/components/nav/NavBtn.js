import styles from "../../styles/components/NavBtn.module.scss";

const NavBtn = ({ handleClick, navActive }) => {
  return (
    <div
      className={` ${styles.navBtn} ${
        navActive ? styles.open : styles.navBtn
      } `}
      onClick={handleClick}
    >
      <div className={styles.line}></div>
    </div>
  );
};

export default NavBtn;
