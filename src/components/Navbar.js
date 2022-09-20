/* eslint-disable react/display-name  */
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './Calculator';
import Quote from './Quote';
import Home from './Home';

export default function Navbar() {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/quote">Quote</Link>
      <Link to="/calculator">Calculator</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/calculator" element={<Calculator />} />
      </Routes>
    </Router>

  );
}
