import { createContext } from 'react';
import Api from '../apis/Api';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');
  const [logged, setLogged] = useState('');
  
  const login = async ({values}) => {
    try {
      const {data} = await Api.post('/auth', values);
      setToken(data);
      localStorage.setItem('token', JSON.stringify(data));
      setLogged(true);
      getMouseEventOptions('../users');
    } catch (error) {
      console.log(error);
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    setLogged(false);
    getMouseEventOptions('./');
  }

  return(
    <AuthContext.Provider value={{ login, logout, token, logged }}>
      { children }
    </AuthContext.Provider>
  );
}

export default AuthProvider;