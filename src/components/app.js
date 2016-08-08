//app componenets
import React, { Component } from 'react';


import Header from './header';
import NavBar from '.navBar';
import ContactUS from '.navBar';


export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <ContactUS/>
          {this.props.children} // explain this again
          <NavBar/>
          <h1> Footer</h1>

      </div>
    );
  }
}
