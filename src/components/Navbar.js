import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faPeopleCarry,
  faShoppingBag,
  faComment,
  faBell,
  faUserCircle,
  faBars,
  faVideo
} from '@fortawesome/fontawesome-free-solid';
export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faHome} />
            </span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faPeopleCarry} />
            </span>
            <span>My Network</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faShoppingBag} />
            </span>
            <span>Jobs</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faComment} />
            </span>
            <span>Messaging</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faBell} />
            </span>
            <span>Notifications</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faUserCircle} />
            </span>
            <span>Me</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faBars} />
            </span>
            <span>Work</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>
              <FontAwesomeIcon icon={faVideo} />
            </span>
            <span>Learning</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
