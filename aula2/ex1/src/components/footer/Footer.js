import Navbar from '../navbar/Navbar';
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Navbar />
      <p>© 2022 Vem Ser DBC Co. No reserved rights. =P</p>
    </footer>
  );
}

export default Footer;