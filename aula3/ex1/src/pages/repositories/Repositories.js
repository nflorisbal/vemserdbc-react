import { useEffect, useState } from 'react';
import axios from 'axios';
import style from './Repositories.module.css';
import ErrorMsg from '../../components/errorMsg/ErrorMsg';

const Repositories = () => {
  const [reposData, setUserData] = useState([]);

  const setup = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/nflorisbal/repos`);
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
          {reposData.map(({id, name, html_url, language, description}) => 
            <div key={id} className={style.card}>
              <h3>{name}</h3>
              <a href={html_url} target='_blank' rel='noreferrer'>Link</a>
              <p>{language}</p>
              <p>{description}</p>
            </div>
          )}
          </>  
        ) : (
          <ErrorMsg />
        )}
    </section>  
  );
}

export default Repositories;