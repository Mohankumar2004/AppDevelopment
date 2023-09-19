import React from 'react'
import { Link } from 'react-router-dom';
import './home.css';
function Home() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/jobs">Jobs</Link>
        </li>
        <li className="nav-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Home;





