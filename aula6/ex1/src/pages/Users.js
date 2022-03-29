import { useContext } from 'react';
import { AuthContext } from '../context/Auth';

const Users = () => {
  const { logout, logged } = useContext(AuthContext);

  return(
    <div>
      <h1>Users</h1>
      {logged && <button onClick={logout}>Logout</button>}
    </div>
  )
}

export default Users;