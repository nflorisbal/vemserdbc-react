import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/Auth';

const Users = () => {
  const { logout, logged, setLogged } = useContext(AuthContext);

  useEffect(() => {
    if(localStorage.getItem('token')) {
      setLogged(true);
    };
    console.log(logged);
  },[logged, setLogged]);

  return(
    <div>
      <h1>Users</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Users;