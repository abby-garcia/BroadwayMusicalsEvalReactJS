import React from 'react';

class NavBar extends React.Component {
    render() {
        return(
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container">
          <ul className="nav nav-pills">
            <li role="presentation" className="active"><a href="#">Home</a></li>
            <li role="presentation"><a href="#">Profile</a></li>
            <li role="presentation"><a href="#">Messages</a></li>
          </ul>
          </div>
        </nav>
      )
    }
}



export default NavBar;
