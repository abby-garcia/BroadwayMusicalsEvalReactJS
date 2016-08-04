import React, { Component } from 'react';


import Header from './header';
import Instructions from './instructions.jsx';
import MusicalPictures from './musicalpictures.jsx';


export default class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Instructions/>
          <MusicalPictures/>


      </div>
    );
  }
}
