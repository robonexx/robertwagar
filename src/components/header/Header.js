import TopMenu from '../../components/topmenu/TopMenu';
import Nav from '../nav/Nav';
import NavItem from '..//nav/NavItem';

// styles
import styles from '../../styles/layout/Header.module.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { SiMusicbrainz } from 'react-icons/si';
import { MdOutlineHistoryEdu, MdOutlineAnnouncement } from 'react-icons/md';
import { GiPlantRoots } from 'react-icons/gi';

export default function Header() {
  return (
    <div className={styles.header}>
      <TopMenu />
      <Nav>
        <NavItem title='home' icon={<AiOutlineHome />} url='/' />
        <NavItem title='about' icon={<MdOutlineAnnouncement />} url='/about' />

        <NavItem
          title='work'
          icon={<MdOutlineHistoryEdu />}
          url='/work'
        ></NavItem>
        <NavItem title='Connect' icon={<SiMusicbrainz />} url='/connect' />
      </Nav>
    </div>
  );
}
