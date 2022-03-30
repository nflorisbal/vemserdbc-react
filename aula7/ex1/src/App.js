import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import Users from './pages/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={ <Users />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;