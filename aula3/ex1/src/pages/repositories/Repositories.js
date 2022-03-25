import { useEffect, useState } from 'react';
import axios from 'axios';
import RepositoryCard from '../../components/repositoryCard/RepositoryCard';
import style from './Repositories.module.css';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';

const Repositories = () => {
  const [reposData, setUserData] = useState({});

  const setup = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/nflorisbal/repo`);
      setUserData(data); 
    } catch (error) {
      console.log('Falha ao conectar ao Github', error);
    }
  }

  const objectIsEmpty = () => {
    if (Object.keys(reposData).length) return true;
    else return false;
  }
  
  useEffect(() => {
    setup();
    
  }, []);

  return (
    <section className={style.contentRepositories}>
    {objectIsEmpty()
      ? (
        <>
          <RepositoryCard />
        </>
      ) : (
        <ErrorMsg />
      )}
    </section>  
  );  
}

export default Repositories;