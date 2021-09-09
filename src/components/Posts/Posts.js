import React from 'react';
import CreatePost from './WritePost';
// import UserPost from './UserPost';
import Avatar from '../Avatar';
import AddFeatures from './AddFeatures';

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>
      <div>
        <Avatar />
        <CreatePost />
        <AddFeatures />
        {/* <UserPost /> */}
      </div>
    </div>
  );
}
