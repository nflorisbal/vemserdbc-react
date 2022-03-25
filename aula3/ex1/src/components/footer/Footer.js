import style from './Footer.module.css';

const Footer = () => {
  return(
    <footer className={style.footer}>
      <a href='https://www.linkedin.com/in/florisbal/' target='_blank'>
        <span>linkedin</span> <span className={style.icon}></span>
      </a>
      <a href='https://github.com/nflorisbal' target='_blank'>
        <span>github</span> <span className={style.icon}></span>
      </a>
      <a href='https://twitter.com/florisbal' target='_blank'>
        <span>twitter</span> <span className={style.icon}></span>
      </a>
      <a href='https://www.instagram.com/nflorisbal/' target='_blank'>
        <span>instagram</span> <span className={style.icon}></span>
      </a>
    </footer>
  );
}

export default Footer;