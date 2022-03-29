import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './context/Auth';
import Home from './pages/Home';
import Users from './pages/Users';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/users' element={<Users />}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;