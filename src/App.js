import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import ValentinePage from './components/ValentinePage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      {currentPage === 'home' ? (
        <HomePage onOpenClick={() => setCurrentPage('valentine')} />
      ) : (
        <ValentinePage onBack={() => setCurrentPage('home')} />
      )}
    </div>
  );
}

export default App;
