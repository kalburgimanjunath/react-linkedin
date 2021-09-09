import React, { useEffect, useState } from 'react';
import CreatePost from './WritePost';
import UserPost from './UserPost';
import Avatar from '../Avatar';
import AddFeatures from './AddFeatures';

export default function Posts() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        setPost(data);
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);
  return (
    <>
      <div className="card gedf-card">
        <div className="card-header">
          <ul
            className="nav nav-tabs card-header-tabs"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="posts-tab"
                data-toggle="tab"
                href="#posts"
                role="tab"
                aria-controls="posts"
                aria-selected="true"
              >
                Make a publication
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="images-tab"
                data-toggle="tab"
                role="tab"
                aria-controls="images"
                aria-selected="false"
                href="#images"
              >
                Images
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="posts"
              role="tabpanel"
              aria-labelledby="posts-tab"
            >
              <div className="form-group">
                <label className="sr-only" for="message">
                  post
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="What are you thinking?"
                />
              </div>
            </div>
          </div>
          <div className="btn-toolbar justify-content-between">
            <div className="btn-group">
              <AddFeatures />
            </div>
            <div className="btn-group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-link dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-globe" />
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="btnGroupDrop1"
              >
                <a className="dropdown-item" href="#">
                  <i className="fa fa-globe" /> Public
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa fa-users" /> Friends
                </a>
                <a className="dropdown-item" href="#">
                  <i className="fa fa-user" /> Just me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <Avatar /> */}
        {/* <CreatePost /> */}

        <UserPost post={post} />
      </div>
    </>
  );
}
