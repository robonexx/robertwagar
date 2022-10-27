import Nav from "../nav/Nav";
import NavItem from "../nav/NavItem";
import { navItems } from "../../assets/data/navItems";
import { Link } from "react-router-dom";

// styles
import styles from "../../styles/layout/Header.module.scss";
/* import Logo from "../logo/Logo"; */
import Rw from "../logo/Rw";
/* import { AiOutlineHome } from 'react-icons/ai';
import { GiDodging } from 'react-icons/gi';
import { GiTechnoHeart } from 'react-icons/gi';
import { GiTargeted } from 'react-icons/gi';
import { GiSkills } from 'react-icons/gi'; */

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        {/*  <Logo /> */}
        <Rw />
      </Link>
      <Nav>
        {navItems.map(({ title, url, icon }, i) => (
          <NavItem title={title} icon={icon} url={url} i={i} key={title} />
        ))}
        {/*  <NavItem title='home'  icon={<AiOutlineHome />}  url='/' />
        <NavItem title='work'  icon={<GiTargeted />}  url='#work'></NavItem>
        <NavItem title='code'  icon={<GiSkills />}  url='/dev' />
        <NavItem title='dance'  icon={<GiTechnoHeart />}  url='/dance' />
        <NavItem title='about'  icon={<GiDodging />}  url='/about' />
        <NavItem title='contact'  icon={<GiTargeted />}  url='/contact' /> */}
      </Nav>
    </div>
  );
}
