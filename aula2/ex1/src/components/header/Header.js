import Logo from '../logo/Logo';
import NavbarTitle from '../navbartitle/HeaderTitle';
import Navbar from '../navbar/Navbar';
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.menu}>
        <Logo />
        <NavbarTitle textTitle='Destiny 2'/>
        <Navbar />
      </section>
    </header>
  );
}

export default Header;