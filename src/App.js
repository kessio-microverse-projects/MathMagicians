/* eslint-disable react/display-name  */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>
  );
}
