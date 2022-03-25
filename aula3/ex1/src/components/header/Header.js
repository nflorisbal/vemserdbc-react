import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import style from './Header.module.css';

const Header = ({data}) => {
  return (
    <header className={style.header}>
      <Logo data={data} />
      <nav>
        <Link to='/'>home</Link>
        <Link to='/about'>about</Link>
        <Link to='/repositories'>repositories</Link>
      </nav>
      <div>
        <Link className={style.contact} to='/contact'>contact</Link>
      </div>
    </header>
  )
}

export default Header;