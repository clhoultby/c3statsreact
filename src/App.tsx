import React from 'react';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';
import { StatsPage } from './Stats/StatsPage';
import { HomePage } from "./Home/HomePage"
import './App.module.css';

function App() {
  return (
    <HashRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/stats">Stats</Link></li>
        </ul>
      </nav>


      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
