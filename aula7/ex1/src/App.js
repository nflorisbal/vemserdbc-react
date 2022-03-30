import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/Auth';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import People from './pages/People';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/people' element={ <People />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;