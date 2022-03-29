import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/Auth';
import { useNavigate } from 'react-router-dom';

const Users = () => {
  const { logout, logged, token, setLogged } = useContext(AuthContext);
  const goto = useNavigate();

  useEffect(() => {
    // console.log(logged);
    localStorage.getItem('token');
  },[]);

  return(
    <div>
      <h1>Users</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Users;