//app componenets
import React, { Component } from 'react';


import Header from './header';


export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          {this.props.children}
          <h1> Footer</h1>

      </div>
    );
  }
}
