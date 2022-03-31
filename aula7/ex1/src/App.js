import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './contexts/AuthContext';
import PeopleProvider from './contexts/PeopleContext';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import People from './pages/people/People';
import CreatePerson from './pages/createperson/CreatePerson';
import Address from './pages/address/Address';
import NotFound from './pages/notfound/NotFound';

import './App.css';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <AuthProvider>
          <PeopleProvider>
            <Header />
            <Routes>
              <Route path='*' element={<NotFound />} />
              <Route path='/' element={<Home />} />
              <Route path='/people' element={ <People />} />
              <Route path='/address' element={ <Address />} />
              <Route path='/create-person' element={<CreatePerson />}>
                <Route path=':id' element={<CreatePerson />} />
              </Route>
            </Routes>
            <Footer />
          </PeopleProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;