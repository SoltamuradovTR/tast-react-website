import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import Button from './Button';

function App() {
  return (
    <div className="container">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;