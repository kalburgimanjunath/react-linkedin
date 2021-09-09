import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StickySidebar from '../components/StickySidebar';
import Posts from '../components/Posts/Posts';
export default function MainPage() {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <Posts />
        <StickySidebar />
      </div>
    </div>
  );
}
