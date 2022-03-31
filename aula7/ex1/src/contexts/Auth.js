import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../apis/PessoaApi';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [logged, setLogged] = useState(false);
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

  return(
    <AuthContext.Provider value={{ 
        login, 
        logout, 
        token, 
        setToken, 
        logged, 
        setLogged,
        haveToken,
    }}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;