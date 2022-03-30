import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../apis/Api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [logged, setLogged] = useState(false);
  const goto = useNavigate();
  
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
    goto('/');
  }

  const haveToken = () => {
    let teste = localStorage.getItem('token')
    console.log(teste);
    return teste;
  }

  return(
    <AuthContext.Provider value={{ 
        login, 
        logout, 
        token, 
        setToken, 
        logged, 
        setLogged,
        goto,
        haveToken,
    }}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;