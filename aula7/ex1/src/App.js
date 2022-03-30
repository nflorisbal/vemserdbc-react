import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/Auth';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Users from './pages/Users';


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={ <Users />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;