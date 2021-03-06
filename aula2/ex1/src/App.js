import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import FirstPage from './components/firstpage/FirstPage';
import Form from './components/form/Form';
import Header from './components/header/Header';
import ClassPage from './components/classpage/ClassPage';

function App() {
  return (
    <div className='App'>
      <Header />
      <FirstPage />
      {/* <ClassPage /> */}
      {/* <Form /> */}
      <Footer />
    </div>
  );
}

export default App;