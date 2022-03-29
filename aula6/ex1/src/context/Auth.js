import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../Api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [logged, setLogged] = useState(false);
  const goto = useNavigate();

  const login = async ({values}) => {
    try {
      const { data } = await Api.post('/auth', values);
      setToken(data);
      localStorage.setItem('token', JSON.stringify(data));
      setLogged(true);
      goto('../users');
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    setLogged(false);
    goto('./');
  }

  return(
    <AuthContext.Provider value={{ login, logout, token, setToken, logged, setLogged }}> 
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;