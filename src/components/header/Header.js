import TopMenu from '../../components/topmenu/TopMenu';
import Nav from '../nav/Nav';
import NavItem from '..//nav/NavItem';

// styles
import styles from '../../styles/layout/Header.module.scss';
/* import { AiOutlineHome } from 'react-icons/ai';
import { GiDodging } from 'react-icons/gi';
import { GiTechnoHeart } from 'react-icons/gi';
import { GiTargeted } from 'react-icons/gi';
import { GiSkills } from 'react-icons/gi'; */

export default function Header() {
  return (
    <div className={styles.header}>
      <TopMenu />
      <Nav>
        <NavItem title='home' /* icon={<AiOutlineHome />} */ url='/' />
        <NavItem title='work' /* icon={<GiTargeted />} */ url='#work'></NavItem>
        <NavItem title='code' /* icon={<GiSkills />} */ url='/dev' />
        <NavItem title='dance' /* icon={<GiTechnoHeart />} */ url='/dance' />
        <NavItem title='about' /* icon={<GiDodging />} */ url='/about' />
      </Nav>
    </div>
  );
}
