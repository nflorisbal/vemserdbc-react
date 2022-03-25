import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import style from './Header.module.css';

const Header = ({userLogin}) => {
  return (
    <header className={style.header}>
      <Logo userLogin={userLogin} />
      <nav>
        <Link to='/'>home</Link>
        <Link to='/about'>sobre</Link>
        <Link to='/repositories'>repositórios</Link>
      </nav>
      <div>
        <Link className={style.contact} to='/contact'>contato</Link>
      </div>
    </header>
  )
}

export default Header;