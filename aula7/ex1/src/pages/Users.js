import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/Auth';

const Users = () => {
  const { goto } = useContext(AuthContext);

  return(
    <div className='container'>
      <h1>Users</h1>
    </div>
  );
}

export default Users;