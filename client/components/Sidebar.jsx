import React from 'react';

const Sidebar = () => {
  return(
     <div id="sidebar-wrapper" className="col-md-2">
        <ul className="sidebar-nav">
          <li>
              <a href="#">Dashboard</a>
          </li>
          <li>
              <a href="#">Shortcuts</a>
          </li>
          <li>
              <a href="#">Overview</a>
          </li>
          <li>
              <a href="#">Events</a>
          </li>
          <li>
              <a href="#">About</a>
          </li>
          <li>
              <a href="#">Services</a>
          </li>
          <li>
              <a href="#">Contact</a>
          </li>
        </ul>
    </div>
  )
}

export default Sidebar;
