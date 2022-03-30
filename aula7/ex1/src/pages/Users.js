import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/Auth';

const Users = () => {
  const { haveToken, goTo } = useContext(AuthContext);

  const setup = () => {
    (!haveToken()) 
      ? goTo('/') 
      : console.log('imprimindo usuários...');
  }

  useEffect(() => {
    setup();
  },[]);

  return(
    <div className='container'>
      <h1>Users</h1>
    </div>
  );
}

export default Users;