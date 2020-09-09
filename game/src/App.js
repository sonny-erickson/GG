import React from 'react';
import pokemon from './components/assets/pokemon.svg';
import { BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
