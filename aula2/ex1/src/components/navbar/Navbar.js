import NavbarLink from '../navbarlink/NavbarLink';
import styles from './Navbar.module.css'

const Navbar = () => {
  return(
    <>
      <nav className={styles.nav}>
        <NavbarLink textLink='Home' url='/' />
        <NavbarLink textLink='Sobre' url='/sobre'/>
        <NavbarLink textLink='Contato' url='/contato'/>
      </nav>
    </>
  );
}

export default Navbar;