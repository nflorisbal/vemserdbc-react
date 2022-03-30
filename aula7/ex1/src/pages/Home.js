import { useContext } from 'react';
import { AuthContext } from '../contexts/Auth';

const Home = () => {
  const { haveToken, token } = useContext(AuthContext);

  return(
    <div className='container'>
      <h1>Home</h1>
      {(!haveToken()) ? (
        <h2>Você não está logado.</h2>
      ) : (
        <h2>Você está logado.</h2>
      )}
    </div>
  );
}

export default Home;