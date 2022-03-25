import { Link } from 'react-router-dom';
import Logo from '../logo/Logo';
import style from './Header.module.css';

const Header = ({data}) => {
  return (
    <header className={style.header}>
      <Logo data={data} />
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/repositories'>Repositories</Link>
      </nav>
      <div>
        <Link className={style.contact} to='/contact'>Contact</Link>
      </div>
    </header>
  )
}

export default Header;