import { useEffect, useState } from 'react';
import axios from 'axios';

const Repositories = () => {
  const [userData, setUserData] = useState({});

  const setup = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/nflorisbal/repos`);
      setUserData({data});
    } catch (error) {
      console.log('Falha ao conectar ao Github', error);
    }
  }

  const objectIsEmpty = () => {
    if (Object.keys(userData).length) return true;
    else return false;
  }
  
  useEffect(() => {
    setup();
  }, []);

  return (
    <>
    {objectIsEmpty()
      ? (
        <>
          <h1>Repos</h1>
        </>
      ) : (
        <p>
          Deu ruim... tem que fazer essa bagaça!
        </p>
      )}
    </>  
  );  
}

export default Repositories;