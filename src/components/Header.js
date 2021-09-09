import React from 'react';

import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/fontawesome-free-solid';
export default function Header() {
  return (
    <div className="header">
      {/* <div className="logo_search">
        <span>
          <FontAwesomeIcon icon={faHome} />
        </span>
        <span className="header_search">
          <input type="text" placeholder="Search" />
        </span>
      </div> */}
      <nav className="navbar navbar-light bg-white">
        <a href="#" className="navbar-brand">
          <span>
            <FontAwesomeIcon icon={faHome} />
          </span>
        </a>

        <form className="form-inline">
          <Navbar />
        </form>
      </nav>
    </div>
  );
}
