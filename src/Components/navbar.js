// Import necessary libraries
import React from 'react';
import classNames from 'classnames';
import './Styles/Navbar.css';
import Link from 'next/link';

const NavBar = () => {
  const isHomeActive = true;
  const isAboutActive = false;
  const isContactActive = false;

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className={classNames('nav-item', { active: isHomeActive })}>
          <Link href="/" className="nav-link" style={{ color: '#e4002b' }}>
            Home
          </Link>
        </li>
        <li className={classNames('nav-item', { active: isAboutActive })}>
          <Link href="/cart" className="nav-link" style={{ color: '#e4002b' }}>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
