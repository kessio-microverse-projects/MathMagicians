/* eslint-disable react/display-name  */
import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Calculator from './Calculator';
import Quote from './Quote';
import Home from './Home';
import '../styles/navbar.css';

const Navbar = () => (
  <Router>
    <nav className="nav">
      <Link className="logo" to="/">Math Magicians</Link>
      <div className="navItems">
        <Link className="linkItem" to="/">Home</Link>
        <Link className="linkItem border" to="/quote">Quote</Link>
        <Link className="linkItem border" to="/calculator">Calculator</Link>
      </div>
    </nav>

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  </Router>

);
export default Navbar;
