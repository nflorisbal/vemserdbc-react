import { Link } from 'react-router-dom';

import style from './Menu.module.css';

const Menu = () => {
  return (
    <nav className={style.navbar}>
        <Link to='/'>Home</Link>
        <Link to='/users'>Users</Link>
    </nav>
  );
}

export default Menu;