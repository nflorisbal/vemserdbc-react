import { Link } from 'react-router-dom';
import style from './Header.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/repositories'>Repositories</Link>
      </nav>
      <div>
        
      </div>
    </header>
  )
}

export default Header;