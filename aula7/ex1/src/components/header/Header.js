import LoginForm from '../login/LoginForm';
import Logo from '../logo/Logo';
import Menu from '../menu/Menu';

import style from './Header.module.css';

const Header = () => {
  return(
  <header className={style.header}>
    <div className={style.headerLeftSide}>
      <Logo />
      <Menu />
    </div>
    <div>
      <LoginForm />
    </div>
  </header>
  );
}

export default Header;