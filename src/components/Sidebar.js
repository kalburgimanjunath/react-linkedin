import React from 'react';
import Widgets from '../components/Widgets';
export default function Sidebar() {
  return (
    <div>
      <Widgets title="profile" />
      <Widgets title="My Pages" />
      <Widgets title="history" />
    </div>
  );
}
