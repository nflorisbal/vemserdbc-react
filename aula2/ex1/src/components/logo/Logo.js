import logoImg from '../../img/destiny_logo.png';
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <>
      <img className={styles.logo} src={logoImg} alt='logo'/>
    </>
  );
}

export default Logo;