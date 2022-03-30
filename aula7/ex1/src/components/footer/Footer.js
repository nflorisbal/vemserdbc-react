import Menu from '../menu/Menu';

import style from './Footer.module.css';

const Footer = () => {
  return(
  <footer className={style.footer}>
    <Menu />
    <small>© 2022 All credits for someone...</small>
  </footer>
  );
}

export default Footer;