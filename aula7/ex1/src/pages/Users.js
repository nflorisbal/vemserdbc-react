import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/Auth';

const Users = () => {
  const { goto } = useContext(AuthContext);

  return(
    <h1>Users</h1>
  );
}

export default Users;