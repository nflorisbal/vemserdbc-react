import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/Auth';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import People from './pages/People';
import Address from './pages/Address';

import './App.css';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            {/* <Route path='*' element={<NotFound />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/people' element={ <People />} />
            <Route path='/address' element={ <Address />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;