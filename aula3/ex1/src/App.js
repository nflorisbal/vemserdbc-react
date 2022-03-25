import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Repositories from './pages/repositories/Repositories';
import Contact from './pages/contact/Contact';
import './App.css';


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

  const objectIsEmpty = () => {
    if (Object.keys(userData).length) return true;
    else return false;
  }

  useEffect(() => {
    setup();
  }, []);

  return (
    <div className='container'>
      {objectIsEmpty()
        ? (
          <BrowserRouter>
            <Header userLogin={userData.login} />
            <Routes>
              <Route path='/' element={<Home profile={userData} />} />
              <Route path='/About' element={<About />} />
              <Route path='/repositories' element={<Repositories />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        ) : (
          <p>
            Deu ruim... tem que fazer essa bagaça!
          </p>
        )}
    </div>
  );
}

export default App;