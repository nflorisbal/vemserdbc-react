import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/header/Header';
import About from './pages/About';
import Repositories from './pages/Repositories';
import Contact from './pages/Contact';

function App() {
  const [userData, setUserData] = useState({});

  const setup = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/nflorisbal`);
      setUserData(data);
    } catch (error) {
      console.log('Falha ao conectar ao Github', error);
    }
  }

  useEffect(() => {
    setup();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path='/' element='' />
            <Route path='/About' element={<About />} />
            <Route path='/repositories' element={<Repositories />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;