import Logo from '../logo/Logo';
import ContactBtn from '../contactBtn/ContactBtn';
import { GiVibratingSmartphone } from 'react-icons/gi';

// styles
import styles from '../../styles/components/TopMenu.module.scss';

export default function TopMenu() {
  return (
    <div className={styles.top_menu}>
      <Logo />
      <h3 className={styles.subtitle}>Cr3aTiv3 M1nDz</h3>
      <ContactBtn title='Contact' icon={<GiVibratingSmartphone />} url='/contact' />
    </div>
  );
}
