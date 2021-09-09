import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import StickySidebar from '../components/StickySidebar';
import Posts from '../components/Posts/Posts';
import Notification from '../components/Notification';
export default function MainPage() {
  return (
    <div className="">
      <Header />
      <div>
        <Notification
          className="notification"
          data="Notifications here. Know more"
        />
      </div>

      <div className="container-fluid gedf-wrapper">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="h5">@Manjunath</div>
                <div className="h7 text-muted">
                  Fullname : Manjunath Kalburgi
                </div>
                <div className="h7">
                  Developer of web applications, JavaScript, PHP, Java, Python,
                  Ruby, Java, Node.js, etc.
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="h6 text-muted">Followers</div>
                  <div className="h5">5.2342</div>
                </li>
                <li className="list-group-item">
                  <div className="h6 text-muted">Following</div>
                  <div className="h5">6758</div>
                </li>
              </ul>
            </div>
          </div>
          {/* <Sidebar /> */}
          <div class="col-md-6 gedf-main">
            <Posts />
          </div>
          <div class="col-md-3">
            <StickySidebar />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
