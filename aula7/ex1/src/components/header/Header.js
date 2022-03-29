import LoginForm from '../login/LoginForm';
import Logo from '../logo/Logo';
import style from './Header.module.css';

const Header = () => {
  return(
  <header className={style.header}>
    <Logo />
    <LoginForm />
  </header>
  );
}

export default Header;