import React, { useEffect, useState } from 'react';
import SocialButtons from './SocialButtons';
export default function UserPost({ post }) {
  return (
    <div>
      {post.map(item => {
        return (
          <div className="card gedf-card">
            <div className="card-header">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mr-2">
                    <img
                      className="rounded-circle"
                      width="45"
                      src="https://picsum.photos/50/50"
                      alt=""
                    />
                  </div>
                  <div className="ml-2">
                    <div className="h5 m-0">@Manjunath</div>
                    <div className="h7 text-muted">Software Developer</div>
                  </div>
                </div>
                <div>
                  <div className="dropdown">
                    <button
                      className="btn btn-link dropdown-toggle"
                      type="button"
                      id="gedf-drop1"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fa fa-ellipsis-h" />
                    </button>
                    <div
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="gedf-drop1"
                    >
                      <div className="h6 dropdown-header">Configuration</div>
                      <a className="dropdown-item" href="#">
                        Save
                      </a>
                      <a className="dropdown-item" href="#">
                        Hide
                      </a>
                      <a className="dropdown-item" href="#">
                        Report
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-body">
              <div className="text-muted h7 mb-2">
                <i className="fa fa-clock-o" /> 10 min ago
              </div>
              <a className="card-link" href="#">
                <h5 className="card-title">{item.title}</h5>
              </a>

              <p className="card-text">{item.body}</p>
              <div>
                <span className="badge badge-primary">JavaScript</span>
                <span className="badge badge-primary">Android</span>
                <span className="badge badge-primary">PHP</span>
                <span className="badge badge-primary">Node.js</span>
                <span className="badge badge-primary">Ruby</span>
                <span className="badge badge-primary">Paython</span>
              </div>
            </div>
            <div className="card-footer">
              <a href="#" className="card-link">
                <i className="fa fa-gittip" /> Like
              </a>
              <a href="#" className="card-link">
                <i className="fa fa-comment" /> Comment
              </a>
              <a href="#" className="card-link">
                <i className="fa fa-mail-forward" /> Share
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
