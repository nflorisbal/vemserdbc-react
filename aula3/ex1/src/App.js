import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from './components/header/Header';
import About from './pages/About';
import Repositories from './pages/Repositories';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './components/footer/Footer';

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
        <Header data={userData.login}/>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/repositories' element={<Repositories />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;