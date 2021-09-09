import React from 'react';
import Notification from './Notification';
import Navbar from './Navbar';
export default function Header() {
  return (
    <div>
      <span>Logo</span>
      <span>Search</span>
      <span>
        <Navbar />
      </span>
      <Notification data="Notifications here. Know more" />
    </div>
  );
}
