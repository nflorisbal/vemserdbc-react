import { createContext, useState } from 'react';
import { crud } from '../api/Api';

export const PeopleContext = createContext();

const PeopleProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] =  useState(false);
  const [people, setPeople] = useState([]);
  const [update, setUpdate] = useState(false);
  
  const getPeople = async () => {
    try {
      const {data} = await crud.get('/pessoa');
      setPeople(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  }

  return(
    <PeopleContext.Provider value={{
      getPeople,
      people,
      setLoading,
      loading,
      error,
      setUpdate,
      update,
    }}>
      { children }
    </PeopleContext.Provider>
  );
}

export default PeopleProvider;