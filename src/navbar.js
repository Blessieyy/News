import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="header">
      <nav>
        <ul>
          
          <li>
            <NavLink
              to="/general"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              General
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/business"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Business
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/entertainment"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Entertainment
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/science"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Science
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/health"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Health
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sports"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Sports
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
