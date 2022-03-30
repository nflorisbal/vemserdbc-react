import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../apis/Api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [logged, setLogged] = useState(false);
  const [people, setPeople] = useState([]);
  const goTo = useNavigate();
  
  const login = async ({values}) => {
    try {
      const {data} = await Api.post('/auth', values);
      setToken(data);
      localStorage.setItem('token', data);
      Api.defaults.headers.common['Authorization'] = data;
      setLogged(true);
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    setLogged(false);
    goTo('/');
  }

  const haveToken = () => {
    return localStorage.getItem('token');
  }

  const getPeople = async () => {
    try {
      const {data} = await Api.get('/pessoa');
      setPeople(data);
      console.log(logged);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <AuthContext.Provider value={{ 
        login, 
        logout, 
        token, 
        setToken, 
        logged, 
        setLogged,
        goTo,
        haveToken,
        people,
        getPeople,
    }}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;