import React from 'react';
import Home from './Home';
import MovieDetail from './components/MovieDetail';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Router>
          <Link to="/">Home</Link> {/* Link to navigate back to the home page */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/movie/:id" element={<MovieDetail/>} /> 
          </Routes>
        </Router>
    </div>
  );
}

export default App;

