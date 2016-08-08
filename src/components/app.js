//app componenets
import React, { Component } from 'react';


import Header from './header';
import NavBar from '.navBar';


export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          {this.props.children} // explain this again
          <NavBar/>
          <h1> Footer</h1>

      </div>
    );
  }
}
