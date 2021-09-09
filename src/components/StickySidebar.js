import React from 'react';
import Widgets from '../components/Widgets';
export default function StickySidebar() {
  return (
    <div>
      <Widgets title="Top News" />
      <Widgets title="Todays Top Courses" />
      <Widgets title="Ads" />
    </div>
  );
}
