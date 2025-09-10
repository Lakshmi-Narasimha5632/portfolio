import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { FaUser, FaLaptopCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaAward } from 'react-icons/fa';
import { BsFillFileEarmarkPersonFill } from 'react-icons/bs';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Ln.
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">
              <AiFillHome /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links">
              <FaUser /> About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links">
              <FaLaptopCode /> Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/resume" className="nav-links">
              <BsFillFileEarmarkPersonFill /> Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/certificates" className="nav-links">
              <FaAward /> Certificates
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/experience" className="nav-links">
              <FaBriefcase /> Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links-button">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
