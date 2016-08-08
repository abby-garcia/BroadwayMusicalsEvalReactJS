//entry point of app
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // only imports what's in {} from react-redux
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'


import App from './components/app';
import Instructions from './components/instructions';
import NavBar from './components/navBar'
import MusicalPictures from './components/musicalpictures';
import ContactUs from './components/contactUs';




import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Instructions} />
        <Route path="musicals" component={MusicalPictures} /> //name path whatever you want
        <Route path="contact" component={ContactUs} /> // component = needs to be the same as the var

      </Route>
    </Router>
  </Provider>
  , document.querySelector('#container'));
